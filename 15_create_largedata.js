const { writeFileSync } = require("node:fs");

const path = require("node:path");

for (let i = 0; i < 10000; i++) {
  writeFileSync(
    path.join(__dirname, "content", "text", "large.txt"),
    `Hello World ${i}\n`,
    { flag: "a" }
  );
}
