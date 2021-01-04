import { Toast } from 'native-base';

import { MESSAGE_ERR_PAST_TIME } from 'constants/messages';
import { EVENT_ADD, EVENT_DELETE } from 'constants/actionTypes';

export const addEvent = ({ title, dateObj }) => dispatch => {
  const { year, month, day, hour, minute, second } = dateObj;
  const date = new Date(year, month - 1, day, hour, minute, second);
  if (date <= new Date()) {
    return Toast.show({
      text: MESSAGE_ERR_PAST_TIME,
      type: 'danger',
      duration: 2500,
      position: 'bottom',
      buttonText: 'Okay',
    });
  }
  dispatch({ type: EVENT_ADD, title, date });
};

export const deleteEvent = id => dispatch =>
  dispatch({ type: EVENT_DELETE, id });
