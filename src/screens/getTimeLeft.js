import moment from 'moment';
import momentPlugin from 'moment-precise-range-plugin';

const calcTimeLeft = (targetDate, currentDate) => {
  const diff = moment.preciseDiff(targetDate, currentDate, true);
  const { years, months, days, hours, minutes, seconds } = diff;
  if (years) return [ { number: years, text: 'y' }, { number: months, text: 'mo' } ];
  //if (years) return { number: years, text: 'y' };
  if (months) return [ { number: months, text: 'mo' }, { number: days, text: 'd' } ];
  //if (months) return { number: months, text: 'mo' };
  if (days) return [ { number: days, text: 'd' }, { number: hours, text: 'h' } ];
  //if (days) return { number: days, text: 'd' };
  if (hours) return [ { number: hours, text: 'h' }, { number: minutes, text: 'min' } ];
  //if (hours) return { number: hours, text: 'h' };
  if (minutes) return [ { number: minutes, text: 'min' }, { number: seconds, text: 's' } ];
  //if (minutes) return { number: minutes, text: 'min' };
  if (seconds) return [ { number: seconds, text: 's' } ];
  //if (seconds) return { number: seconds, test: 's'  };
  return { number: 99, text: 'x' };
};

export default calcTimeLeft;
