const fetch = require("node-fetch");

const Github = "https://api.github.com";

const user = fetch(Github);

// console.log(user);

user.then(function() {
    console.log(user);
})



// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.