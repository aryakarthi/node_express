const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
