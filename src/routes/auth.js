var express = require("express");
var router = express.Router();
var prefix = "auth/";

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
  //UserController.findUser();
  return res.redirect("/" + prefix + "login");
});

router.get("/login", (req, res, next) => {
  res.render("content", {
    title: "Please login",
    messages: req.flash("loginMessage"),
    content_path: prefix + "login",
  });
});

router.get("/register", (req, res, next) => {
  res.render("content", {
    title: "Register",
    messages: req.flash("registerMessage"),
    content_path: prefix + "register",
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
      return res.redirect("/" + prefix + "login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        console.log(err);
        return next(err);
      }
      return res.redirect("/business/list");
    });
  })(req, res, next);
});

router.post("/register", (req, res, next) => {
  // instantiate a user object
  let newUser = new user({
    username: req.body.username,
    password: req.body.password,
    mail: req.body.mail,
    display: req.body.displayName,
  });

  user.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User: " + err.name);
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.redirect("/" + prefix + "register");
      /*
      , {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      }
      */
    } else {
      // if no error exists, then registration is successful

      // redirect the user and authenticate them

      return passport.authenticate("local")(req, res, () => {
        res.redirect("/");
      });
    }
  });
});

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
