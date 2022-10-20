function initializePassport(app) {
  //modules for authentication
  let session = require("express-session");
  let passport = require("passport");
  let passportLocal = require("passport-local");
  let localStratergy = passportLocal.Strategy;
  let flash = require("connect-flash");

  //setup express session
  app.use(
    session({
      secret: "SomeSecret",
      saveUninitialized: false,
      resave: false,
    })
  );

  //intialize passport
  app.use(passport.initialize());
  app.use(passport.session());

  //initialize flash
  app.use(flash());

  //create usermodel instance
  let users = require("../models/user");
  let user = users.userModel;

  //implement a user authenticaion Strategy
  passport.use(user.createStrategy());

  //serialize and deserialize user object info -encrypt and decrypt
  passport.serializeUser(user.serializeUser());
  passport.deserializeUser(user.deserializeUser());

  // Pass the authorized user data for EJS access
  app.use(function (req, res, next) {
    console.log(typeof req.user);
    if (req.user != null && req.user != "undefined" && !typeof undefined) {
      res.locals.currentUser = req.user;
      res.locals.currentDisplayname = req.user.display;
    }
    next();
  });
}

module.exports = {
  initializePassport,
};
