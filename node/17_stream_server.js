const http = require("node:http");

const path = require("node:path");
const fs = require("node:fs");

const { readFileSync } = require("node:fs");

const server = http.createServer((req, res) => {
  // const data = readFileSync(
  //   path.join(__dirname, "content", "text", "large.txt"),
  //   "utf-8"
  // );
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end(data);

  const readStr = fs.createReadStream(
    path.join(__dirname, "content", "text", "large.txt"),
    "utf-8"
  );
  readStr.on("open", () => {
    readStr.pipe(res);
  });
  readStr.on("error", (err) => {
    res.end(err);
  });
});

server.listen(3000);
