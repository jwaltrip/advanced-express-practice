// import mongoose to connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create products schema
const ProductSchema = new Schema({
  name: String,
  description: String
});

// export products model
module.exports = mongoose.model("products", ProductSchema);