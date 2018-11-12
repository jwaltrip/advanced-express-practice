// import mongoose to connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create vehicles schema
const ContactSchema = new Schema({
  name: String,
  occupation: String,
  avatar: String
});

// export contacts model
module.exports = mongoose.model("contacts", ContactSchema);
