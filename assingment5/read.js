const fs = require('fs');
let linesArray = [];

// Read the file asynchronously
fs.readFile('./apiFile', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    // Display the file contents
    // console.log(data);               // this prints the whole content of the file altogether

     // Split the file contents into an array of lines
     const lines = data.split('\n');                       
    
     // Display each line separately
     lines.forEach(line => {
       console.log(line);
     });
    
     // Store lines in an array
    linesArray = lines.filter(line => line.trim() !== '');

    // Display the lines array
    console.log(linesArray);
    // printing(linesArray);

  }
});




