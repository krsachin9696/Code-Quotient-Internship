
const multiplication = require('./multiply');

  test('multiplies two positive numbers', () => {
    expect(multiplication(5, 10)).toBe(50);
  });

  test('multiplies two negative numbers', () => {
    expect(multiplication(-8, -4)).toBe(32);
  });

  test('multiplies one positive and one negative number', () => {
    expect(multiplication(10, -7)).toBe(-70);
  });

  test('multiplies a number with zero', () => {
    expect(multiplication(0, 15)).toBe(0);
  });

  test('multiplies -0 with 0', () => {
    expect(multiplication(-0, 0)).toBe(-0);
  });

  test('multiplies two floating-point numbers', () => {
    expect(multiplication(3.5, 2.1)).toBeCloseTo(7.35);
  });

  test('multiplies two large numbers', () => {
    expect(multiplication(9999999999, 1)).toBe(9999999999);
  });

  test('multiplies two string numbers', () => {
    expect(multiplication("7", "5")).toBe(35);
  });

  test('multiplies two non-numeric strings', () => {
    expect(multiplication("hello", "world")).toBeNaN();
  });

  test('multiplies with one argument missing', () => {
    expect(multiplication(7)).toBeNaN();
  });

  test('multiplies with more than two arguments', () => {
    expect(multiplication(3, 5, 7)).toBeNaN();
  });

 

  test('multiplies with undefined values', () => {
    expect(multiplication(undefined, 7)).toBeNaN();
  });

  test('multiplies with an empty string', () => {
    expect(multiplication("", 15)).toBe(0);
  });

  test('multiplies arrays', () => {
    expect(multiplication([2, 3], [4, 5])).toBeNaN();
  });

  test('multiplies objects', () => {
    expect(multiplication({ a: 5 }, { b: 10 })).toBeNaN();
  });

