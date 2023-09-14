const { readFile, writeFile } = require("node:fs/promises");

const path = require("node:path");

console.log("started");

const readData = async () => {
  try {
    const data = await readFile(
      path.join(__dirname, "content", "text", "sample.txt"),
      "utf8"
    );
    console.log(data);

    await writeFile(path.join(__dirname, "content", "text", "copy.txt"), data);
    console.log("data written");
  } catch (err) {
    console.log(err);
  }
};

console.log("finished");

readData();
