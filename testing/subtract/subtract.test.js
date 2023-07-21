// test for the subtraction
const subtract=require("./subtract");

    test('subtracting two positive numbers', () => {
      expect(subtract(10, 5)).toBe(5);
    });
  
    test('subtracting two negative numbers', () => {
      expect(subtract(-8, -4)).toBe(-4);
    });
  
    test('subtracting a positive number from a negative number', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });
  
    test('subtracting a negative number from a positive number', () => {
      expect(subtract(7, -2)).toBe(9);
    });
  
    test('subtracting zero from a positive number', () => {
      expect(subtract(10, 0)).toBe(10);
    });
  
    test('subtracting a positive number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });
  
    test('subtracting zero from a negative number', () => {
      expect(subtract(-15, 0)).toBe(-15);
    });
  
    test('subtracting a negative number from zero', () => {
      expect(subtract(0, -8)).toBe(8);
    });
  
    test('subtracting floating-point numbers', () => {
      expect(subtract(3.5, 2.1)).toBeCloseTo(1.4);
    });
  
    test('subtracting a large number from another large number', () => {
      expect(subtract(10000000000, 9999999999)).toBe(1);
    });
  
    test('subtracting a string number from another string number', () => {
      expect(subtract("10", "5")).toBe(5);
    });
  
    test('subtracting non-numeric strings', () => {
      expect(subtract("hello", "world")).toBeNaN();
    });
  
    test('subtracting a string number from a numeric value', () => {
      expect(subtract(10, "5")).toBe(5);
    });
  
    test('subtracting non-numeric values', () => {
      expect(subtract({}, [])).toBeNaN();
    });
  
    test('subtracting undefined and null values', () => {
      expect(subtract(undefined, null)).toBeNaN();
    });
  
  
