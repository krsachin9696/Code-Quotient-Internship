const childProcess = require("child_process");


// // This bunch of code is not working, there is some issue with dir

// const command = childProcess.spawn("dir");

// command.stdout.on("data", function (data){
//   console.log(data);
// });


// console.log(process.argv)



// const command = childProcess.spawn("dir", ["-a"]);

let command = null;

if (process.platform === "win32") {
  command = childProcess.spawn("cmd", ["/c", "dir"]);
} else {
  command = childProcess.spawn("ls", ["-a"]);
}

command.stdout.on("data", function (data) {
  console.log(data.toString());
});

command.on("close", function (code) {
  console.log(`child process exited with code ${code}`);
});
command.on("error", function (err) {
  console.log(`child process exited with error ${err}`);
});




// this is properly working 

// const command = childProcess.spawn("node", ["test.js"]);

// command.stdout.on("data", function (data){
//   console.log(data);
// });

// command.on("close", function(code){
//   console.log(`child process exited with code ${code}`);
// });


// const command = childProcess.spawn("ls");

// command.stdout.on("data", function(data){
//   console.log(data.toString());
// });

// command.on("close", function (code){
//   console.log(`child process exited with code ${code}`);
// });

// command.on("error", function (err){
//   console.log(`child process exited with error ${err}`);
// });





// SPAWN  
// It is used to launch and execute a new process asynchronously,
// allowing you to interact with it and capture its input/output.