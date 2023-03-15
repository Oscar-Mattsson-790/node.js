const fs = require("fs");

const readline = require("readline-sync");

const filename = readline.question("Filnamn?\n");
console.log(`Valt filnamn: ${filename}`);

const alicequotes =
  "Why, sometimes I've believed as many as six impossible things before breakfast.";

// Sparar "citatet" i en txt fil
fs.writeFile(filename + ".txt", alicequotes, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Quote saved");
  }
});

// Skrivs ut i terminalen from den skapade txt filen
fs.readFile(filename + ".txt", "utf8", (error, content) => {
  if (content) {
    console.log(content);
  } else {
    console.log(error);
  }
});
