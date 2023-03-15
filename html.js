// const fs = require("fs");

// // Read the contents of the file synchronously
// const content = fs.readFileSync("html.js", "utf8");

// // Print the contents to the console
// console.log(content);

const fs = require("fs");

// Read the contents of the file asynchronously
fs.readFile("index.html", "utf8", (error, content) => {
  if (error) {
    console.log(error);
  } else {
    console.log(content);
  }
});
