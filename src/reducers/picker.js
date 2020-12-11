import { YEARS_RANGE } from 'constants/picker';
import {
  PICKER_PICK_YEAR,
  PICKER_PICK_MONTH,
  PICKER_PICK_DAY,
  PICKER_PICK_TIME,
} from 'constants/actionTypes';
import { DAYS_IN_MONTHS } from 'constants/daysInMonths';

const currentDate = new Date();
const years = [];
for(let i = 0; i <= YEARS_RANGE; i++) {
  years.push(currentDate.getFullYear() + i);
}

const initialState = {
  years,
  yearPosition: 0,
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  daysInMonth: 31,
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

    case PICKER_PICK_YEAR: {
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

    case PICKER_PICK_MONTH: {
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

    case PICKER_PICK_DAY:
      return {
        ...state,
        day: action.position + 1,
      };

    case PICKER_PICK_TIME:
      return {
        ...state,
        [action.unit]: action.position,
      };

    default:
      return state;

  }
};
