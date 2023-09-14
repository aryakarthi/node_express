const path = require("node:path");

console.log("Seperator :", path.sep);

const relPath = path.join("content", "text", "sample.txt");
console.log("Relative File Path :", relPath);

const absPath = path.join(__dirname, "content", "text", "sample.txt");
console.log("Absolute File Path :", absPath);

const absResolve = path.resolve(__dirname, "content", "text", "sample.txt");
console.log("Absolute File Path (Resolve) :", absResolve);

const fileName = path.basename(absPath);
console.log("File Name :", fileName);

const extName = path.extname(absPath);
console.log("Extension Name", extName);
