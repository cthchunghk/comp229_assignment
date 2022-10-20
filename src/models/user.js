// let express = require("express");
// let router = express.Router();
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

//create a model class
let userModel = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    password: {
      type: String,
      default: "",
      trim: true,
      required: "password is required",
    },
    mail: {
      type: String,
      default: "",
      trim: true,
      //required: "Email is required",
    },
    role: {
      type: String,
      default: "normal",
      trim: true,
      //required: "user role is required",
    },
    display: {
      type: String,
      default: "",
      trim: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },

  {
    collection: "users",
  }
);

let options = { missingPasswordError: "Wrong / Missing Password" };
userModel.plugin(passportLocalMongoose, options);
module.exports.userModel = mongoose.model("userModel", userModel);
