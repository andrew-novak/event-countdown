import { EVENTS_SET } from 'constants/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {

    case EVENTS_SET:
      return action.events;

    default:
      return state;

  }
};
