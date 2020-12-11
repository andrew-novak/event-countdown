import {
  PICKER_PICK_YEAR,
  PICKER_PICK_MONTH,
  PICKER_PICK_DAY,
  PICKER_PICK_TIME,
} from 'constants/actionTypes';

export const pickYear = position => dispatch =>
  dispatch({ type: PICKER_PICK_YEAR, position });

export const pickMonth = position => dispatch =>
  dispatch({ type: PICKER_PICK_MONTH, position });

export const pickDay = position => disatch =>
  dispatch({ type: PICKER_PICK_DAY, position });

export const pickTime = (unit, position) => dispatch =>
  dispatch({ type: PICKER_PICK_TIME, unit, position });
