import {
  SNACKBAR_SHOW,
  SNACKBAR_HIDE,
} from 'constants/actionTypes';

const timeouts = {
  homeScreen: null,
  addScreen: null,
};

export const showSnackbar = ({ screen, variant, message, }) => dispatch => {
  const hide = screen => dispatch({ type: SNACKBAR_HIDE, screen });

  if (timeouts[screen] !== null) {
    clearTimeout(timeouts[screen]);
    hide(screen);
  }

  dispatch({ type: SNACKBAR_SHOW, variant, screen, message });

  timeouts[screen] = setTimeout(
    () => hide(screen),
    2500,
  );
};
