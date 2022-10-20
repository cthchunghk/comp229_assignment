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

router.get("/register", (req, res, next) => {
  res.render("content", {
    title: "Register",
    content_path: content + "register",
  });
});

router.post("/login", (req, res, next) => {
  console.log(req.body.username + "\t" + req.body.password);
  passport.authenticate("local", (err, user, info) => {
    console.log(info);
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
      return res.render("auth/register", {
        title: "Register",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
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
