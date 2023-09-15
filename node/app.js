const { createReadStream, createWriteStream } = require("node:fs");

const path = require("node:path");

const readStr = createReadStream(
  path.join(__dirname, "content", "text", "sample.txt"),
  "utf-8"
);

const writeStr = createWriteStream(
  path.join(__dirname, "content", "text", "str.txt")
);

// readStr.on("data", (chunk) => {
//   writeStr.write(chunk.toString());
// });

// # pipe method
readStr.pipe(writeStr);
