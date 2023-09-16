const express = require("express");
const path = require("node:path");
const port = 5000;

const app = express();

// setup static and middleware
app.use(express.static(path.join(__dirname, "../public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log(`Server is listening on port ${port}...`);
});
