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

router.get("/", loginChecker, async (req, res, next) => {
  contactList = await ContactController.displayAllRecord(res, req, next);
  console.log("Business Routes:24 - " + contactList);
  res.redirect(urlPrefix + "list");
});

router.get("/list", loginChecker, ContactController.showAllRecordPage);
router.get("/add", loginChecker, ContactController.showAddContactPage);
router.post("/add", loginChecker, ContactController.addContact);
router.get("/edit/:id", loginChecker, ContactController.showEditContactPage);
router.post("/edit/:id", loginChecker, ContactController.editContact);
router.get("/del/:id", loginChecker, ContactController.deleteContact);


module.exports = router;
