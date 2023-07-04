// main.js

// Import the randomGenerator module
const generateRandomNumber = require('./randomGenerator');

// Usage example
function calculation(){

    const min = 1;
    const max = 100;
    const randomNumber = generateRandomNumber(min, max);
    console.log(randomNumber);
}

calculation();