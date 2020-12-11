import { combineReducers } from 'redux';

import time from './time';
import events from './events';
import picker from './picker';

const rootReducer = combineReducers({
  time,
  events,
  picker,
});

export default rootReducer;
