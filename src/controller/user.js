let mongoose = require("mongoose");

//create reference to the model (dbschema )
let users = require("../models/user");

function findUser() {
  users.find((err, userList) => {
    console.log(userList);
  });
}

 module.exports = {
    findUser
 }
