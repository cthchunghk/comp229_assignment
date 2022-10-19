var express = require("express");
var router = express.Router();
var content = "auth/";

var UserController = require("../controller/user");

let passport = require("passport");

//create the user model instance
let userModel = require("../models/user");
let user = userModel.userModel; //alias

// function requireAuth(req, res, next) {
//     // check if the user is logged in
//     if (!req.isAuthenticated()) {
//       return res.redirect("/login");
//     }
//     next();
//   }

router.get("/", function (req, res, next) {
  UserController.findUser();
});

router.get("/login", (req, res, next) => {
  res.render("content", {
    title: "Please login",
    content_path: content + "login",
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      console.log(err);
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      console.log("Username / password is wrong");
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/auth/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        console.log(err);
        return next(err);
      }
      return res.redirect("/contact");
    });
  })(req, res, next);
});

module.exports = router;
