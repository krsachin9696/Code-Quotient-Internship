
const add=require("./sum");


//testing for addition
test('adds two positive numbers', () => {
    expect(add(5, 10)).toBe(15);
  });

  
  test('adds two negative numbers', () => {
    expect(add(-8, -4)).toBe(-12);
  });

 
  test('adds one positive and one negative number', () => {
    expect(add(10, -7)).toBe(3);
  });

  
  test('adds a number to zero', () => {
    expect(add(0, 15)).toBe(15);
  });

 
  test('adds -0 and 0', () => {
    expect(add(-0, 0)).toBe(0);
  });


  test('adds two floating-point numbers', () => {
    expect(add(3.5, 2.1)).toBe(5.6);
  });

  
  test('adds two large numbers', () => {
    expect(add(9999999999, 1)).toBe(10000000000);
  });

  
  test('adds two string numbers', () => {
    expect(add("7", "5")).toBe(12);
  });

  
  test('adds two non-numeric strings', () => {
    expect(add("hello", "world")).toBeNaN();
  });

  
  test('adds with one argument missing', () => {
    expect(add(7)).toBeNaN();
  });

  test('adds with more than two arguments', () => {
    expect(add(3, 5, 7)).toBeNaN();
  });

 

  test('adds with undefined values', () => {
    expect(add(undefined, 7)).toBeNaN();
  });

  
  test('adds with an empty string', () => {
    expect(add("", 15)).toBe(15);
  });

  
  test('adds arrays', () => {
    expect(add([1, 2, 3], [4, 5])).toBeNaN();
  });

  test('adds objects', () => {
    expect(add({ a: 5 }, { b: 10 })).toBeNaN();
  });
  