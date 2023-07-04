

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(generateRandomNumber(1, 90));
module.exports = generateRandomNumber;



// function generateRandomNumber(min, max) {
   
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   module.exports = generateRandomNumber;
  