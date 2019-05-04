function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

function convert(days) {
  let year = 1980;
  let daysLeft = days;

  while (daysLeft > 365) {
    if (isLeapYear(year)) {
      if (daysLeft > 366) {
        daysLeft -= 366;
        year += 1;
      }
    } else {
      daysLeft -= 365;
      year += 1;
    }
  }
  return year;
}

// We could use something like rewire to avoid exporting isLeapYear while still
// accessing it for testing.
module.exports = {
  convert,
  isLeapYear,
};
