import {
  EVENTS_SET,
  EVENT_ADD,
  EVENT_DELETE,
} from 'constants/actionTypes';

const initialState = [];

let num = 10;

export default (state = initialState, action) => {
  switch (action.type) {

    case EVENTS_SET:
      return action.events;

    case EVENT_ADD: {
      const { title, date } = action;
      const newState = state;
      newState.push({ id: num, title, date });
      num++;
      return newState;
    }

    case EVENT_DELETE: {
      const { id } = action;
      const newState = state.filter(obj => obj.id !== id);
      return newState;
    }

    default:
      return state;

  }
};
