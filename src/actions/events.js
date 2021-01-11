import { Toast } from 'native-base';

import { STORAGE_KEY_EVENTS } from 'constants/storage'
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
} from 'constants/actionTypes';
import { showSnackbar } from 'actions/snackbars';
import { getLocal, storeLocal } from 'storage';

let nextId = 10;

export const getLocalEvents = () => dispatch => {
  getLocal(STORAGE_KEY_EVENTS)
    .then(stored => {
      if (stored) {
        dispatch({ type: EVENTS_SET, events: stored });
      }
    });
}

export const addEvent = ({ event: { title, date }, events, navigate }) => dispatch => {
  if (title === '') {
    return dispatch(showSnackbar({ screen: 'addScreen', variant: 'danger', message: MESSAGE_ADD_EVENT_ERROR_NO_TITLE }))
  }

  if (date <= new Date()) {
    return dispatch(showSnackbar({ screen: 'addScreen', variant: 'danger', message: MESSAGE_ADD_EVENT_ERROR_PAST_TIME }));
  }

  const event = { id: nextId, title, date };
  nextId++;
  const newEvents = [ ...events, event ];
  storeLocal({ key: STORAGE_KEY_EVENTS, value: newEvents });
  dispatch({ type: EVENTS_SET, events: newEvents });
  navigate('Home');
  dispatch(showSnackbar({ screen: 'homeScreen', variant: 'success', message: MESSAGE_EVENT_ADDED }));
};

export const deleteEvent = ({ eventId, events }) => dispatch => {
  const newEvents = events.filter(e => e.id !== eventId);
  storeLocal({ key: STORAGE_KEY_EVENTS, value: newEvents });
  dispatch({ type: EVENTS_SET, events: newEvents });
  dispatch(showSnackbar({ screen: 'homeScreen', variant: 'warning', message: MESSAGE_EVENT_DELETED }));
};
