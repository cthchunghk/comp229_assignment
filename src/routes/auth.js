var express = require("express");
var router = express.Router();
var content = "auth/";

var UserController = require("../controller/user");

router.get("/", function (req, res, next) {
  UserController.findUser();
});

module.exports = router;
