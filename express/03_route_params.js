const express = require("express");
const app = express();
const port = 3000;

const { products } = require("../data/data");

// # hard-coded json data
// app.get("/", (req, res) => {
//   res.json([
//     { name: "arya", city: "chennai" },
//     { name: "karthi", city: "nellai" },
//   ]);
// });

// # hard-coded html
app.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="/api/products">Products</a>');
});

// # To display a specific properties of the product object
app.get("/api/products", (req, res) => {
  const newProd = products.map((prod) => {
    const { id, name, image } = prod;
    return { id, name, image };
  });
  res.json(newProd);
});

// # To display single product details
// app.get("/api/products/1", (req, res) => {
//   const selectedProd = products.find((prod) => prod.id === 1);
//   res.json(selectedProd);
// });

// # Route parameter
app.get("/api/products/:pid", (req, res) => {
  // console.log(req.params);
  const { pid } = req.params;
  // ? pid is string
  const selectedProd = products.find((prod) => prod.id === Number(pid));
  if (!selectedProd) {
    // return res.status(404).json({
    //   message: "Product not found",
    // });
    // ? or
    return res.status(404).send("Product not found");
  }
  res.json(selectedProd);
});

// # Tp pass multiple route parameters
app.get("/api/products/:pid/seller/:sid", (req, res) => {
  const { pid, sid } = req.params;
  res.json(req.params);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
