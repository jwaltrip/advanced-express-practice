const express = require("express");
const bodyParser = require("body-parser");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

app.use(bodyParser.json());

// GET all comments array
app.get("/comments", (req, res, next) => {
  return res.json(comments);
});

// GET specific comment id
app.get("/comments/:id", (req, res, next) => {
  const comment = comments.find(c => c._id == req.params.id);
  return res.json(comment);
});

// POST - add a comment to the comments array
app.post("/comments", (req, res, next) => {
  // increment _id +1
  const newComment = {
    _id: comments[comments.length-1]._id + 1,
    body: req.body.body,
    postId: req.body.postId
  };

  // add new user to users array
  comments.push(newComment);

  // return the item just added
  return res.json(comments[comments.length - 1]);
});

// GET all products array
app.get("/products", (req, res, next) => {
  return res.json(products);
});

// GET specific product id
app.get("/products/:id", (req, res, next) => {
  const product = products.find(p => p._id == req.params.id);
  return res.json(product);
});

// TODO add reviews array to post body
// POST - add a comment to the products array
app.post("/products", (req, res, next) => {
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

  // add new user to users array
  products.push(newProduct);

  // return the item just added
  return res.json(products[products.length - 1]);
});

// GET all vehicles array
app.get("/vehicles", (req, res, next) => {
  return res.json(vehicles);
});

// GET specific vehicle id
app.get("/vehicles/:id", (req, res, next) => {
  const vehicle = products.find(v => v._id == req.params.id);
  return res.json(vehicle);
});

// TODO add post route for vehicles
// POST - add a comment to the products array
app.post("/vehicles", (req, res, next) => {
  // increment _id +1
  const newVehicle = {
    _id: vehicles[vehicles.length-1]._id + 1,
    imgUrl: req.body.imgUrl,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    km: req.body.km,
    miles: req.body.miles,
    fuels: req.body.fuels,
    city: req.body.city,
    isNew: req.body.isNew,
  };

  // add new user to users array
  vehicles.push(newVehicle);

  // return the item just added
  return res.json(vehicles[vehicles.length - 1]);
});

// GET all contacts array
app.get("/contacts", (req, res, next) => {
  return res.json(contacts);
});

// GET specific contact id
app.get("/contacts/:id", (req, res, next) => {
  const contact = products.find(c => c._id == req.params.id);
  return res.json(contact);
});

// TODO add post route for contacts

// tell server to listen on port 3002
app.listen(3003, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3003");
});
