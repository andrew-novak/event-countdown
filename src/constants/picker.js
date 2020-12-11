export const YEARS_RANGE = 5;

export const MONTHS = [
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec',
];

const genNumberArray = ({ length, shift = 0 }) =>
  Array.from({ length }, (_, i) => `${ i + shift }`);

export const DAYS = {
  31: genNumberArray({ length: 31, shift: 1 }),
  30: genNumberArray({ length: 30, shift: 1 }),
  29: genNumberArray({ length: 29, shift: 1 }),
  28: genNumberArray({ length: 28, shift: 1 }),
};

export const HOURS = genNumberArray({ length: 24 });
export const MINUTES = genNumberArray({ length: 60 });
export const SECONDS = genNumberArray({ length: 60 });
