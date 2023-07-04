const generateRandomNumber = require("./randomNumberGenerator");



function calculation(){

    let min = 1;
    let max = 90;
    

    const randomNumber = generateRandomNumber(min, max);

    console.log("Random Number", randomNumber);

    const double = randomNumber*2;
    const square = randomNumber*randomNumber;
    const cube = randomNumber*randomNumber*randomNumber;

    console.log("Double", double);
    console.log("Square", square);
    console.log("Cube", cube);
}

calculation();