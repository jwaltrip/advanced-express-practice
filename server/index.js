const express = require("express");
const bodyParser = require("body-parser");
// import mongoose to connect to mongodb
const mongoose = require("mongoose");

const app = express();

// setup bodyparser middleware
app.use(bodyParser.json());

// setup mongoDB connection
mongoose.Promise = global.Promise;
// mongoDB connection string
mongoose.connect("mongodb://aca-user:pass123@ds159563.mlab.com:59563/advanced-express-practice");

// TODO import mongoose models

// import routes
const comments_route = require("./routes/comments.route");
const products_route = require("./routes/products.route");
const vehicles_route = require("./routes/vehicles.route");
const contacts_route = require("./routes/contacts.route");

// setup routes
app.use("/", comments_route); // comments route
app.use("/", products_route); // products route
app.use("/", vehicles_route); // vehicles route
app.use("/", contacts_route); // contacts route

// tell server to listen on port 3002
app.listen(3001, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3001");
});
