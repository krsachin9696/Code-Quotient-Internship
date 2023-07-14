const { spawn } = require('child_process');
const readline = require('readline');
const isWindows = process.platform === 'win32';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function executeCommand(command) {
  const [cmd, ...args] = isWindows ? ['cmd', '/c', command] : command.split(' ');

  const childProcess = spawn(cmd, args);

  childProcess.stdout.on('data', (data) => {
    console.log(`Command output: ${data}`);
  });

  childProcess.stderr.on('data', (data) => {
    console.error(`Command stderr: ${data}`);
  });

  childProcess.on('error', (error) => {
    console.error(`Error executing command: ${error}`);
  });

  childProcess.on('close', (code) => {
    console.log(`Command exited with code ${code}`);
    promptUser();
  });
}

function promptUser() {
  rl.question('Enter a shell command (or "exit" to quit): ', (command) => {
    if (command.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    executeCommand(command);
  });
}

promptUser();
