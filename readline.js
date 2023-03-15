const fs = require("fs");
const readlineSync = require("readline-sync");

// Get the file name from the user
const filename = readlineSync.question("Enter the file name: ");

// Get the text to be written to the file from the user
const text = readlineSync.question("Enter the text to write to the file: ");

// Write the text to the file
fs.writeFile(filename, text, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Successfully wrote to file '${filename}' `);
  }
});
