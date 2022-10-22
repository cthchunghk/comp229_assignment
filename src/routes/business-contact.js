var express = require("express");
var router = express.Router();
var urlPrefix = "/business/";
var prefix = "business-contact/";

let ContactController = require("../controller/business-contact");
let AuthController = require("../controller/auth");
loginChecker = AuthController.requireAuth;

//create the user model instance
let contactModel = require("../models/business-contact");
let contact = contactModel.businessContactModel; //alias

// function requireAuth(req, res, next) {
//     // check if the user is logged in
//     if (!req.isAuthenticated()) {
//       return res.redirect("/login");
//     }
//     next();
//   }

router.get("/", loginChecker, (req, res, next) => {
  contactList = ContactController.displayAllRecord(res, req, next);
  console.log("Business Routes:24 - " + contactList);
  res.redirect(urlPrefix + "list");
});

router.get("/list", loginChecker, ContactController.showAllRecord);

function renderPage(data, res, title, content_path) {
  res.render("content", {
    title: "Contect list",
    content_path: prefix + "list",
  });
}

module.exports = router;
