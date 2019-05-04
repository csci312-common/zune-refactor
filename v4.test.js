const { isLeapYear, daysInYear, convert } = require('./v4');

describe('dayToYear function', () => {
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

  describe('Days in a year', () => {
    test('should 365 in non-leap year', () => {
      expect(daysInYear(1981)).toBe(365);
    });

    test('should 366 in leap year', () => {
      expect(daysInYear(1980)).toBe(366);
    });
  });

  describe('Converting dates', () => {
    test('should not add a year for 0 days', () => {
      expect(convert(0)).toEqual(1980);
    });

    test('should not add a year when too few days', () => {
      expect(convert(255)).toEqual(1980);
    });

    test('should add a year when more days', () => {
      expect(convert(400)).toEqual(1981);
    });

    test('should convert last day of a non-leap year', () => {
      expect(convert(731)).toEqual(1981);
    });

    test('should convert last day of leap year', () => {
      expect(convert(10593)).toEqual(2008);
      expect(convert(1827)).toEqual(1984);
      expect(convert(366)).toEqual(1980);
    });
  });
});
