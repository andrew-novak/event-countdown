import { TEXT_INPUT_CHANGE } from 'constants/actionTypes';

const initialState = {
  newEventTitle: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TEXT_INPUT_CHANGE:
      return {
        ...state,
        [ action.field ]: action.value,
      };

    default:
      return state;

  }
};
