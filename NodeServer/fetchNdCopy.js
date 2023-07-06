const https = require('https');
const fs = require('fs');

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
const outputFile = './a';

const fileStream = fs.createWriteStream(outputFile);

https.get(apiEndpoint, (response) => {
  response.setEncoding('utf8');

  // Process the response data
  response.on('data', (data) => {
    fileStream.write(data);
  });

  // Handle errors
  response.on('error', (error) => {
    console.error('Error:', error);
  });

  // Save the file once the response has ended
  response.on('end', () => {
    fileStream.end();
    console.log('Data saved to', outputFile);
  });
});
