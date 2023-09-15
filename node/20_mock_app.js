const http = require("node:http");
const { readFileSync } = require("node:fs");

const path = require("node:path");
const { log } = require("node:console");

const getHTML = readFileSync(
  path.join(__dirname, "files", "home.html"),
  "utf-8"
);
const getCSS = readFileSync(
  path.join(__dirname, "files", "style.css"),
  "utf-8"
);
const getImg = readFileSync(path.join(__dirname, "files", "codelab.png"));
const getJS = readFileSync(path.join(__dirname, "files", "script.js"), "utf-8");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(getHTML);
    res.end();
  }
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>contact page</h1>");
    res.end();
  }
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(getCSS);
    res.end();
  }
  else if (url === "/codelab.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(getImg);
    res.end();
  }
  else if (url === "/script.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(getJS);
    res.end();
  }
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);
