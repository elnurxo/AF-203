const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const PORT = 7070;
const bodyParser = require("body-parser");
const crypto = require("crypto");
app.use(bodyParser.json());

const fakeData = [
  {
    id: 1,
    name: "Coca Cola",
    price: 1.5,
  },
  {
    id: 2,
    name: "Sarikiz",
    price: 1.2,
  },
];

//STATUS CODES - 200, 204, 401, 404, 500, 201, 202
//BASE API URL
app.get("/api", (req, res) => {
  res.send("Welcome to Our API!");
});

//Get Products
app.get("/api/products", (req, res) => {
  const { name } = req.query;
  if (!name) {
    res.status(200).send(fakeData);
  } else {
    const filteredData = fakeData.filter((x) =>
      x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    res.status(200).send(filteredData);
  }
});
//Get Product by ID
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = fakeData.find((x) => x.id == id);
  if (product === undefined) {
    res.status(204).send({
      message: "product not found!",
    });
  } else {
    res.status(200).send(product);
  }
});
//Post Product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: crypto.randomUUID(),
    name: name,
    price: price,
  };
  fakeData.push(newProduct);
  res.status(201).send({
    message: "product created successfully!",
    data: newProduct,
  });
});
//Delete Product
app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const deletingProduct = fakeData.find((x) => x.id == id);
  let idx = fakeData.indexOf(deletingProduct);
  fakeData.splice(idx, 1);
  if (deletingProduct === undefined) {
    res.status(204).send("product not found!");
  } else {
    res.status(203).send({
      message: "product deleted successfully!",
    });
  }
});
//Edit Product
app.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;

  let editingProduct = fakeData.find((x) => x.id == id);
  if (name) {
    editingProduct.name = name;
  }
  if (price) {
    editingProduct.price = price;
  }
  res.status(200).send({
    message: "product updated successfully!",
  });
});

app.listen(PORT, () => {
  console.log(`App running on  PORT: ${PORT}`);
});
