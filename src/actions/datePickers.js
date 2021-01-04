import {
  DATE_PICKER_SET_DATE_TIME,
  DATE_PICKER_PICK_YEAR,
  DATE_PICKER_PICK_MONTH,
  DATE_PICKER_PICK_DAY,
  DATE_PICKER_PICK_TIME,
} from 'constants/actionTypes';

export const setDateTime = date => dispatch =>
  dispatch({ type: DATE_PICKER_SET_DATE_TIME, date });

export const pickYear = position => dispatch =>
  dispatch({ type: DATE_PICKER_PICK_YEAR, position });

export const pickMonth = position => dispatch =>
  dispatch({ type: DATE_PICKER_PICK_MONTH, position });

export const pickDay = position => dispatch =>
  dispatch({ type: DATE_PICKER_PICK_DAY, position });

export const pickTime = (unit, position) => dispatch =>
  dispatch({ type: DATE_PICKER_PICK_TIME, unit, position });
