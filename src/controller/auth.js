/**
 * Centralizing the related logic for auth
 */

// var router = express.Router();
var prefix = "auth/";

var UserController = require("../controller/user");

let passport = require("passport");

//create the user model instance
let userModel = require("../models/user");
let user = userModel.userModel; //alias

function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    req.flash("loginMessage", "Please login to access certain page");
    return res.redirect("/" + prefix + "login");
  }
  next();
}

module.exports = {
  requireAuth,
};
