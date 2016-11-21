const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const BadDate = "aint no such date";

function MeetupDay(year, month, day, nth) {
  let direction = 1;
  let date      = new Date(year, month);
  day           = days.indexOf(day);

  const ordinal = str => +str[0];
  const sevens  = n => 7 * (n - 1);

  if (nth === 'teenth') {
    date.setDate(date.getDate() + 12);
  } else if (nth === 'last') {
    // the 0th day of any month is the last day of the previous month
    date = new Date(year, month + 1, 0);
    // and, count backwards
    direction = -1;
  } else {
    date.setDate(date.getDate() + sevens(ordinal(nth)));
  }
  
  while (date.getDay() !== day) {
    date.setDate(date.getDate() + direction);
  }

  if (date.getMonth() === month)
    return date;
  else 
    throw BadDate;
}

module.exports = MeetupDay;
