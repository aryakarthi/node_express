const express = require("express");
const app = express();
const port = 3000;

let { users } = require("../data/data");

app.get("/api/users", (req, res) => {
  res.status(200).json({ success: true, data: users });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
