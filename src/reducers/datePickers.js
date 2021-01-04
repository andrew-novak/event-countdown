import { YEARS_RANGE } from 'constants/datePickers';
import {
  DATE_PICKER_SET_DATE_TIME,
  DATE_PICKER_PICK_YEAR,
  DATE_PICKER_PICK_MONTH,
  DATE_PICKER_PICK_DAY,
  DATE_PICKER_PICK_TIME,
} from 'constants/actionTypes';
import { DAYS_IN_MONTHS } from 'constants/daysInMonths';

const currentDate = new Date();

const getYearsInRange = date => {
  const years = [];
  for (let i = 0; i <= YEARS_RANGE; i++) {
    years.push(date.getFullYear() + i)
  }
  return years;
};

const years = getYearsInRange(currentDate);

const initialState = {
  years,
  yearPosition: 0,
  month: 1,
  daysInMonth: 31,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
};

const capitalize = string => {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const isLeapYear = year =>
  (
    (year % 4 === 0)
    && (year % 100 != 0)
  )
  || (year % 400 == 0);

const getDaysInMonth = ({ month, year }) =>
  (month !== 2)
    ? DAYS_IN_MONTHS[month]
    : (isLeapYear(year))
      ? DAYS_IN_MONTHS[2].leap
      : DAYS_IN_MONTHS[2].nonLeap;

export default (state = initialState, action) => {
  switch (action.type) {

    case DATE_PICKER_SET_DATE_TIME: {
      const years = getYearsInRange(action.date);
      const yearPosition = 0;
      const month = action.date.getMonth() + 1;
      const daysInMonth = getDaysInMonth({
        month,
        year: years[yearPosition],
      });
      return {
        ...state,
        years,
        yearPosition,
        month,
        daysInMonth,
        day: action.date.getDay() + 1,
        hour: action.date.getHours(),
        minute: action.date.getMinutes(),
        second: action.date.getSeconds(),
      };
    }

    case DATE_PICKER_PICK_YEAR: {
      const daysInMonth = getDaysInMonth({
        month: state.month,
        year: state.years[action.position],
      });
      return {
        ...state,
        yearPosition: action.position,
        daysInMonth,
        day: (state.day > daysInMonth) ? daysInMonth : state.day,
      };
    }

    case DATE_PICKER_PICK_MONTH: {
      const daysInMonth = getDaysInMonth({
        month: action.position + 1,
        year: state.years[state.yearPosition],
      });
      return {
        ...state,
        month: action.position + 1,
        daysInMonth,
        day: (state.day > daysInMonth) ? daysInMonth : state.day,
      };
    }

    case DATE_PICKER_PICK_DAY:
      return {
        ...state,
        day: action.position + 1,
      };

    case DATE_PICKER_PICK_TIME:
      return {
        ...state,
        [action.unit]: action.position,
      };

    default:
      return state;

  }
};
