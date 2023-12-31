

// // Check if two numbers are provided as command-line arguments
// if (process.argv.length !== 4) {
//     console.log('Please provide two numbers as command-line arguments.');
//     process.exit(1);
//    }                         //This block of code checks if the number of command-line arguments is exactly 4. If not, it means the user did not provide the expected two numbers as input. In that case, it displays an error message and exits the program with a status code of 1.
  
//   // Parse the command-line arguments as numbers
//   const num1 = parseFloat(process.argv[2]);  // process.argv is a property in Node.js that provides access to the command-line arguments passed when running a Node.js script
//   const num2 = parseFloat(process.argv[3]);
  
//   // Check if the provided arguments are valid numbers
// //   if (isNaN(num1) || isNaN(num2)) {
// //     console.log('Please provide valid numbers as command-line arguments.');
// //     process.exit(1);
// //   }
  
//   // Perform arithmetic operations
//   const sum = num1 + num2;
//   const difference = num1 - num2;
//   const product = num1 * num2;
//   const quotient = num1 / num2;
  
//   // Print the results
//   console.log(`Sum: ${sum}`);
//   console.log(`Difference: ${difference}`);
//   console.log(`Product: ${product}`);
//   console.log(`Quotient: ${quotient}`);
  

const stdin = process.stdin;
stdin.setEncoding('utf8');

function getUserInput(prompt) {
  process.stdout.write(prompt);
  return new Promise((resolve) => {
    stdin.once('data', (data) => {
      resolve(data.trim());
    });
  });
}

// Example usage
async function main() {
  const n1 = await getUserInput("Enter a number: ");
  const n2 =await getUserInput("Enter second number: ");
//   console.log(`Hello, ${name}!`);
const sum=n1+n2;
const diff=n1-n2;
const mul=n1*n2;
const div=n1/n2;
console.log(`Sum,${sum}`);
console.log(`difference,${diff}`);
console.log(`Multiplication,${mul}`);
console.log(`Division,${div}`);
  process.exit(); // Optional: Exit the program
}

main();