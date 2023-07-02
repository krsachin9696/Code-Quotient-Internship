const CalculateArea = require("area-of-square");

const areaOfBigSquare = CalculateArea(33);

const area1 = CalculateArea(3434);

console.log(areaOfBigSquare);
console.log(area1);

const calculateRectangleArea = require("./utils/area/rectangle");

console.log("Rectangle Area: ", calculateRectangleArea(2, 4));