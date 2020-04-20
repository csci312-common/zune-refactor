/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function convert(days) {
  let year = 1980;
  let daysLeft = days;

  while (true) {
    const daysInCurrentYear = daysInYear(year);
    if (daysLeft <= daysInCurrentYear) {
      return year;
    }
    daysLeft -= daysInCurrentYear;
    year += 1;
  }
}

module.exports = {
  convert,
  isLeapYear,
  daysInYear,
};
