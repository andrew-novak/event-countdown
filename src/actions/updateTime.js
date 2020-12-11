import { UPDATE_TIME } from 'constants/actionTypes';

export default newTime => dispatch =>
  dispatch({ type: UPDATE_TIME, newTime });
