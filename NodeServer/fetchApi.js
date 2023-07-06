

// this code fetches data from external api and prints it on console. 


const fetch = require('node-fetch');    // require('node-fetch') does not works on the latest version of node fetch
                                        // therfore we need to downgrade it to ---- npm i node-fetch@2.6.1

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Actual API URL

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log('Response data:', data);
  })
  .catch(error => {
    console.error('Error retrieving data:', error);
  });





// const fetch = require("node-fetch");
// const http = require("http");

// function callExternalApi(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

// const serv = http.createServer(callExternalApi);

// serv.listen(3000, function(){
//     console.log("server is listening on port 3000");
//     callExternalApi();
// });
