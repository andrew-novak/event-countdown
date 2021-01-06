import { combineReducers } from 'redux';

import time from './time';
import events from './events';
import datePickers from './datePickers';
import textInputs from './textInputs';
import snackbars from './snackbars';

const rootReducer = combineReducers({
  time,
  events,
  datePickers,
  textInputs,
  snackbars,
});

export default rootReducer;
