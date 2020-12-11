import { DELETE_EVENT } from 'constants/actionTypes';

export default id => dispatch =>
  dispatch({ type: DELETE_EVENT, id });
