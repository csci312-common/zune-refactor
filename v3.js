function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function addCommonYear(year, daysLeft) {
  return { year: year + 1, daysLeft: daysLeft - 365 };
}

function addLeapYear(year, daysLeft) {
  return (daysLeft > 366)
    ? { year: year + 1, daysLeft: daysLeft - 366 }
    : { year, daysLeft };
}

function convert(days) {
  let year = 1980;
  let daysLeft = days;

  while (daysLeft > 365) {
    ({ year, daysLeft } = isLeapYear(year)
      ? addLeapYear(year, daysLeft)
      : addCommonYear(year, daysLeft));
  }
  return year;
}

module.exports = {
  convert,
  isLeapYear,
  addCommonYear,
  addLeapYear,
};
