import {
  SNACKBAR_SHOW,
  SNACKBAR_HIDE,
} from 'constants/actionTypes';

const initialState = {
  homeScreen: {
    visible: false,
    variant: 'default',
    message: '',
  },
  addScreen: {
    visible: false,
    variant: 'default',
    message: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SNACKBAR_SHOW:
      return {
        ...state,
        [action.screen]: {
          visible: true,
          variant: action.variant,
          message: action.message,
        },
      };

    case SNACKBAR_HIDE:
      return {
        ...state,
        [action.screen]: {
          ...state[action.screen],
          visible: false,
        },
      };

    default:
      return state;

  }
};
