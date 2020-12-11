import { UPDATE_TIME } from 'constants/actionTypes';

const initialState = new Date();

export default (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_TIME:
      return action.newTime;

    default:
      return state;

  }
};
