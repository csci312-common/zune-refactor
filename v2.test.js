const { isLeapYear } = require('./v2');

describe('Leap years', () => {
  // There is a leap year every year whose number is perfectly divisible by four,
  // except for years which are both divisible by 100 and not divisible by 400.
  test('should occur every 4 years', () => {
    expect(isLeapYear(2004)).toBeTruthy();
  });

  test('but should not occur every 100 years', () => {
    expect(isLeapYear(2100)).toBeFalsy();
  });

  test('but should occur every 400 years', () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });
});

