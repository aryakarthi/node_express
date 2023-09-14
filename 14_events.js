const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("response", () => {
  console.log("Hello world!");
});

emitter.on("response", (fname, lname) => {
  console.log(`${fname} ${lname}`);
});

emitter.emit("response", "arya", "karthi");

// ? can create multiple functions with same event
// ? emit() should be called after on()

// # create server using event emitter

// const http = require("node:http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World!");
// });

// server.listen(3000);
