import { combineReducers } from 'redux';

import time from './time';
import events from './events';
import datePickers from './datePickers';
import textInputs from './textInputs';

const rootReducer = combineReducers({
  time,
  events,
  datePickers,
  textInputs,
});

export default rootReducer;
