const express = require("express");
const app = express();
const port = 3000;

const { logger, greetUser } = require("./06_mid_functions");

// req => middleware => res

// # To use middleware functions with all routes
// # Should be placed in top of all routes
// app.use(logger);

// # To use middleware functions with specified routes.
// # here a route starts with /api only can use the middleware
// app.use("/api", logger);

// # To use multiple middleware functions
// # will invoked in the order of array
app.use([logger, greetUser]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.get("/api/users", (req, res) => {
  res.send("Users");
});

// # To use a single middleware function in a route
// app.get("/", logger, (req, res) => {
//   res.send("Home");
// });

// # To use multiple middleware functions in a route
// app.get("/about", [logger, greetUser], (req, res) => {
//   res.send("About");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact");
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
