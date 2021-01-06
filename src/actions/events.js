import { Toast } from 'native-base';

import {
  MESSAGE_ADD_EVENT_ERROR_NO_TITLE,
  MESSAGE_ADD_EVENT_ERROR_PAST_TIME,
  MESSAGE_EVENT_ADDED,
  MESSAGE_EVENT_DELETED,
} from 'constants/messages';
import {
  SNACKBAR_SHOW,
  SNACKBAR_HIDE,
  EVENTS_SET,
  EVENT_ADD,
  EVENT_DELETE,
} from 'constants/actionTypes';
import { showSnackbar } from 'actions/snackbars';

export const setEvents = events => dispatch =>
  dispatch({ type: EVENTS_SET, events });

export const addEvent = ({ title, dateObj, navigate }) => dispatch => {
  if (title === '') {
    return dispatch(showSnackbar({ screen: 'addScreen', variant: 'danger', message: MESSAGE_ADD_EVENT_ERROR_NO_TITLE }))
  }

  const { year, month, day, hour, minute, second } = dateObj;
  const date = new Date(year, month - 1, day, hour, minute, second);
  if (date <= new Date()) {
    return dispatch(showSnackbar({ screen: 'addScreen', variant: 'danger', message: MESSAGE_ADD_EVENT_ERROR_PAST_TIME }));
  }
  dispatch({ type: EVENT_ADD, title, date });
  navigate('Home');
  dispatch(showSnackbar({ screen: 'homeScreen', variant: 'success', message: MESSAGE_EVENT_ADDED }));
};

export const deleteEvent = id => dispatch => {
  dispatch({ type: EVENT_DELETE, id });
  dispatch(showSnackbar({ screen: 'homeScreen', variant: 'warning', message: MESSAGE_EVENT_DELETED }));
};
