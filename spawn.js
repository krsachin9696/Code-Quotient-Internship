// Create a program that executes a series of shell commands based on user input and displays the results.

const childProcess = require("child_process");

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

async function main() {
    const n1 = await getUserInput("Enter the shell command>: ");

    let command = null;

    if (process.platform === "win32") {
    command = childProcess.spawn("cmd", ["/c", n1]);
    // process.exit(); // Optional: Exit the program
    } else {
    command = childProcess.spawn("ls", ["-a"]);
    // process.exit(); // Optional: Exit the program
    }


    command.stdout.on("data", function (data) {
    console.log(data.toString());
    });

    command.on("close", function (code) {
    console.log(`child process exited with code ${code}`);
    process.exit();
    });
    command.on("error", function (err) {
    console.log(`child process exited with error ${err}`);
    process.exit();
    });

}

main();