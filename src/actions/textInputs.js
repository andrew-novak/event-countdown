import { TEXT_INPUT_CHANGE } from 'constants/actionTypes';

export const changeTextInput = ({ field, value }) => dispatch =>
  dispatch({ type: TEXT_INPUT_CHANGE, field, value });
