import {
  EVENT_ADD,
  EVENT_DELETE,
} from 'constants/actionTypes';

export const addEvent = ({ title, year, month, day, hour, minute, second }) => dispatch => {
  const date = new Date(year, month, day, hour, minute, second);
  dispatch({ type: EVENT_ADD, title, date });
};

export const deleteEvent = id => dispatch =>
  dispatch({ type: EVENT_DELETE, id });
