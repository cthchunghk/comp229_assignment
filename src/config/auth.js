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
  //   passport.serializeUser(user.serializeUser());
  //   passport.deserializeUser(user.deserializeUser());
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
}

module.exports = {
  initializePassport,
};
