const express = require('express');
const router = express.Router();

// import commnet controller
const products_controller = require("../controllers/products.controller");

// GET all products array
router.get("/products", products_controller.list);

// GET specific product id
router.get("/products/:id", products_controller.show);

// POST - add a product to the products array
router.post("/products", products_controller.create);

module.exports = router;
