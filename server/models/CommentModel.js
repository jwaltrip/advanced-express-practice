// import mongoose to connect to mongodb
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create comment schema
const CommentSchema = new Schema({
  body: String
});

// export comment model
module.exports = mongoose.model("comments", CommentSchema);
