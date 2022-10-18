let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let userModel = mongoose.Schema(
  {
    username: String,
    password: String,
    mail: String,
    role: String,
    display: String
  },

  {
    collection: "users",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("users", userModel);
