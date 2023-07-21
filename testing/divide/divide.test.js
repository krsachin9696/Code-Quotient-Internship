
const divide = require('./divide');

describe('divide function tests', () => {
  test('divides two positive numbers', () => {
    expect(divide(10, 5)).toBe(2);
  });

  test('divides two negative numbers', () => {
    expect(divide(-8, -4)).toBe(2);
  });

  test('divides one positive and one negative number', () => {
    expect(divide(10, -5)).toBe(-2);
  });

  test('divides zero by a number', () => {
    expect(divide(0, 15)).toBe(0);
  });

  test('divides a number by zero', () => {
    expect(divide(10, 0)).toBe(Infinity);
  });

  test('divides -0 by 0', () => {
    expect(divide(-0, 0)).toBe(-Infinity);
  });

  test('divides a floating-point number by another floating-point number', () => {
    expect(divide(3.5, 2.1)).toBeCloseTo(1.6666666666666667);
  });

  test('divides two large numbers', () => {
    expect(divide(9999999999, 1)).toBe(9999999999);
  });

  test('divides two string numbers', () => {
    expect(divide("10", "5")).toBe(2);
  });

  test('divides non-numeric strings', () => {
    expect(divide("hello", "world")).toBeNaN();
  });

  test('divides with one argument missing', () => {
    expect(divide(7)).toBeNaN();
  });

  test('divides with more than two arguments', () => {
    expect(divide(10, 2, 5)).toBeNaN();
  });

  test('divides null by a number', () => {
    expect(divide(null, 10)).toBe(0);
  });

  test('divides a number by null', () => {
    expect(divide(10, null)).toBe(Infinity);
  });

  test('divides undefined by a number', () => {
    expect(divide(undefined, 7)).toBeNaN();
  });

  test('divides a number by undefined', () => {
    expect(divide(10, undefined)).toBeNaN();
  });

  test('divides an empty string by a number', () => {
    expect(divide("", 15)).toBe(0);
  });

  test('divides arrays', () => {
    expect(divide([10, 20], [2, 5])).toBeNaN();
  });

  test('divides objects', () => {
    expect(divide({ a: 10 }, { b: 2 })).toBeNaN();
  });
});
