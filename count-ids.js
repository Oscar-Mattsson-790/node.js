const fs = require("fs");
// Räknar antalet ID:n i style.css och skriver ut totalen

// fs.readFile("style.css", "utf8", (error, css) => {
//   if (error) {
//     console.log(error);
//   } else {
//     const numIds = (css.match(/#[\w-]+/g) || []).length;
//     console.log(`Total number of IDs: ${numIds}`);
//   }
// });

fs.readFile("style.css", "utf8", (error, content) => {
  if (content) {
    console.log(content);
    const ids = content.split("#");
    console.log(ids.length - 1);
  } else {
    console.log(error);
  }
});

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log("Starting server");
});
