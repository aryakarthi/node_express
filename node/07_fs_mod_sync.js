const { readFileSync, writeFileSync, appendFileSync } = require("node:fs");

const path = require("node:path");

// # read text file
const readData = readFileSync(
  path.join(__dirname, "content", "text", "sample.txt"),
  "utf-8"
);

console.log(readData);

// # write text file
// writeFileSync(path.join(__dirname, "content", "text", "copy.txt"), readData);

// # append text file ( using flag)
// writeFileSync(
//   path.join(__dirname, "content", "text", "copy.txt"),
//   `\n\n${readData}`,
//   { flag: "a" }
// );

// # append text file
appendFileSync(
  path.join(__dirname, "content", "text", "copy.txt"),
  `\n\n${readData}`,
  "utf-8"
);
