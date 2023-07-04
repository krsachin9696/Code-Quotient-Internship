// randomGenerator.js

// Function to generate a random number between a given range
function generateRandomNumber(min, max) {
   
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  module.exports = generateRandomNumber;
  