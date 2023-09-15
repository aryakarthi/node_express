// # read file

const { readFile } = require("node:fs");
const path = require("node:path");

console.log("1 - started");

readFile(
  path.join(__dirname, "content", "text", "sample.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      console.log("2 - data readed successfully!");
    }
  }
);

console.log("3 - ended");

// # setTimeout

// console.log("1 - started");

// setTimeout(() => {
//   console.log("2 - ran successfully");
// }, 0);

// console.log("3 - ended");

// # setInterval

// console.log("1 - started");
// let count = 0;
// setInterval(() => {
//   console.log("2 - Count :", count);
//   count++;
// }, 2000);

// console.log("3 - ended");
