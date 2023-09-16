const express = require("express");
const app = express();
const port = 3000;

const { users } = require("../data/data");

// # hard-coded html
app.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="/api/users">Users</a>');
});

// # To display a specific properties of the user object
app.get("/api/users", (req, res) => {
  const getUsers = users.map((user) => {
    const { id, name, email, phone } = user;
    return { id, name, email, phone };
  });
  res.json(getUsers);
});

// # query string parameters

// ? http://localhost:3000/api/users/query?regno=333&dept=fed

// app.get("/api/users/query", (req, res) => {
//   console.log(req.query);
//   res.json(req.query);
// });

// # search (filter) and limit (pagination)

// ? http://localhost:3000/api/users/query?search=a&limit=2

app.get("/api/users/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let allUsers = [...users];
  if (search) {
    allUsers = allUsers.filter((user) =>
      user.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }
  if (limit) {
    allUsers = allUsers.slice(0, Number(limit));
  }
  if (allUsers.length < 1) {
    // res.status(200).send("Product not matched");
    // or
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(allUsers);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
