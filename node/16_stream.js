const { createReadStream } = require("node:fs");

const path = require("node:path");

const readStr = createReadStream(
  path.join(__dirname, "content", "text", "large.txt"),
  { encoding: "utf-8", highWaterMark: 10 }
);

readStr.on("data", (chunk) => {
  console.log(chunk);
});

// ? default buffer size = 64kb
// ? highWaterMark - to change buffer size
// ? encoding - mention encode type of chunk
