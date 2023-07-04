function recursive(){


const fs = require("fs");
const path = require("path");
const { mkdirSync, copyFileSync } = require("fs");

function copyFilesWithExtension(sourceDir, targetDir, extension) {
  // Create the target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  // Read the contents of the source directory
  const files = fs.readdirSync(sourceDir);

  // Iterate through each file in the source directory
  files.forEach((file) => {
    const filePath = path.join(sourceDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Recursively copy files from subdirectories
      copyFilesWithExtension(filePath, targetDir, extension);
    } else if (path.extname(file) === extension) {
      // Copy files with the specified extension to the target directory
      const targetFile = path.join(targetDir, file);
      copyFileSync(filePath, targetFile);
      console.log(`Copied ${filePath} to ${targetFile}`);
    }
  });
}

// Example usage
const sourceDirectory = "./files";
const targetDirectory = "./fil";
const fileExtension = ".txt";

copyFilesWithExtension(sourceDirectory, targetDirectory, fileExtension);


}

recursive();