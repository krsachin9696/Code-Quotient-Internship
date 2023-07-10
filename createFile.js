const fs = require('fs');

const directoryPath = 'D:/Internship/Code-Quotient-Intership/assingment5';
const filename = 'example.txt';
const fileContent = 'This is the content of the new file.';

const filePath = `${directoryPath}/${filename}`;

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('An error occurred:', err);
  } else {
    console.log('File created successfully.');
  }
});
