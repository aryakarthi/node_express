const { readFile, writeFile, appendFile } = require("node:fs");

const path = require("node:path");

// # callback inside callback leads callback hell

readFile(
  path.join(__dirname, "content", "text", "sample.txt"),
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
    writeFile(
      path.join(__dirname, "content", "text", "copy.txt"),
      data,
      "utf-8",
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
        appendFile(
          path.join(__dirname, "content", "text", "copy.txt"),
          "\n\n - appended text",
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Data appended!");
            }
          }
        );
      }
    );
  }
);
