// import mongoose to connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create vehicles schema
const VehicleSchema = new Schema({
  year: String,
  make: String,
  model: String
});

// export vehicles model
module.exports = mongoose.model("vehicles", VehicleSchema);
