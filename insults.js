const fs = require("fs");
const path = require("path");

// Get the path to insults.json relative to this file
const insultsPath = path.join(__dirname, "insults.json");

try {
  // Read the contents of insults.json
  const contents = fs.readFileSync(insultsPath);

  // Parse the contents as JSON
  const insults = JSON.parse(contents);

  // Iterate through the array of insults and print each one
  console.log("Insults:");
  console.log("--------");
  insults.forEach((insult, index) => {
    console.log(`${index + 1}. ${insult}`);
  });

  // Count the number of insults in the array
  const count = insults.length;

  // Print the count of insults
  console.log(`\nTotal insults: ${count}`);
} catch (err) {
  console.error(`Error reading or parsing insults.json: ${err.message}`);
}
