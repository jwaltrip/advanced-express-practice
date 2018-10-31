const express = require('express');
const router = express.Router();

// import commnet controller
const products_controller = require("../controllers/products.controller");
const products = products_controller.products;

// GET all products array
router.get("/products", (req, res, next) => {
  return res.json(products);
});

// GET specific product id
router.get("/products/:id", (req, res, next) => {
  const product = products.find(p => p._id == req.params.id);
  return res.json(product);
});

// POST - add a product to the products array
router.post("/products", (req, res, next) => {
  // increment _id +1
  const newProduct = {
    _id: products[products.length-1]._id + 1,
    name: req.body.name,
    description: req.body.description,
    reviews: req.body.reviews,
    rating: req.body.rating,
    imgUrl: req.body.imgUrl,
    price: req.body.price,
    category: req.body.category,
  };

  // add new product to products array
  products.push(newProduct);

  // return the item just added
  return res.json(products[products.length - 1]);
});

module.exports = router;
