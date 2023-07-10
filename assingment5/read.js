// take api's url from a file, fetch data and copy in a new file dynamically"

const fs = require('fs');
const fetch = require('node-fetch');
const { stringify } = require('querystring');
let linesArray = [];



function readFileAndProcess(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        linesArray = lines.filter(line => line.trim() !== '');
        resolve(linesArray);
      }
    });
  });
}

// Usage:
readFileAndProcess('./apiFile')
  .then(linesArray => {
    console.log(linesArray);
    callingapi(linesArray);
  })
  .catch(err => {
    console.error(err);
  });



// ..... Calling api stored in the array
function callingapi(arr)
{
    for(var i=0; i<arr.length; i++){
        apiUrl = arr[i];
        let directoryPath = 'D:/Internship/Code-Quotient-Intership/assingment5';
        let filename = JSON.stringify(i);
        let txt = ".txt";
        let filePath = `${directoryPath}/${filename}${txt}`;
        console.log(filePath);
        // the below code fetches data from different api's and prints in console..... but we have to make a new file and store this data in that file
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // console.log('Response data:', data);
          
          var fileContent = JSON.stringify(data);
          creatingFile(filePath, fileContent);
        })
        .catch(error => {
          console.error('Error retrieving data:', error);
        });

        
    }
}



function creatingFile(filename, fileContent){
  console.log("ye function call ho rha h");
  fs.writeFile(filename, fileContent, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    } else {
      console.log('File created successfully.');
    }
  });
}

// // Read the file asynchronously
// fs.readFile('./apiFile', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     // Display the file contents
//     // console.log(data);               // this prints the whole content of the file altogether

//      // Split the file contents into an array of lines
//      const lines = data.split('\n');                       
    
//      // Display each line separately
//      lines.forEach(line => {
//        console.log(line);
//      });
    
//      // Store lines in an array
//     linesArray = lines.filter(line => line.trim() !== '');

//     // Display the lines array
//     console.log(linesArray);
//     // printing(linesArray);

//   }
// });

// const fs = require('fs');