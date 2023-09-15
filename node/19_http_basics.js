const http = require("node:http");

const port = 3000;

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>HOME</h1>");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>ABOUT</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>PAGE NOT FOUND!</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
