const { readFile, watchFile } = require("node:fs");

const path = require("node:path");

const filePath = path.join(__dirname, "content", "text", "sample.txt");

const readData = (p) => {
  return new Promise((resolve, reject) => {
    readFile(p, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readData(filePath)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
