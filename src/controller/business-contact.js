// let express = require("express");
// let router = express.Router();
let mongoose = require("mongoose");

var prefix = "business-contact/";

//create reference to the model (dbschema )
let contact = require("../models/business-contact");

function displayAllRecord(req, res, next) {
  contact.find((err, contactList) => {
    if (err) {
      return console.error(err);
    }
    //console.log(contactList);
    this.contactList = contactList;
    //console.log(contacts);
  });
  //console.log(contacts);
  //callback(this.contactList);
  return this.contactList;
}

showAllRecordPage = (req, res, next) => {
  contact
    .find((err, contactList) => {
      if (err) {
        return console.error(err);
      } else {
        res.render("content", {
          title: "Contect list",
          messages: req.flash("contactMessage"),
          contactList: contactList,
          content_path: prefix + "list",
        });
      }
    })
    .sort([["name"]]);
};

showAddContactPage = (req, res, next) => {
  res.render("content", {
    title: "Add content",
    content_path: prefix + "add",
  });
};

showEditContactPage = (req, res, next) => {
  let id = req.params.id;
  contact.findById(id, (err, contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("content", {
        title: "Edit contact",
        contact: contact,
        content_path: prefix + "edit",
      });
    }
  });
};

addContact = (req, res, next) => {
  let newContact = contact({
    name: req.body.name,
    phone: req.body.phone,
    mail: req.body.mail,
  });
  contact.create(newContact, (err, contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      req.flash(
        "contactMessage",
        "Contact: " + req.body.name + " is added successfully"
      );
      res.redirect("/business/list");
    }
  });
};

editContact = (req, res, next) => {
  let id = req.params.id;
  let updateContact = contact({
    _id: id,
    name: req.body.name,
    phone: req.body.phone,
    mail: req.body.mail,
  });
  contact.updateOne({ _id: id }, updateContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      req.flash(
        "contactMessage",
        "Selected contact is updated successfully"
      );
      res.redirect("/business/list");
    }
  });
};

deleteContact = (req, res, next) => {
  let id = req.params.id;
  //Warning: collection.remove is deprecated. Use deleteOne, 
  //deleteMany, or bulkWrite instead
  contact.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      req.flash(
        "contactMessage",
        "Contact: " + req.body.name + " is removed successfully"
      );
      res.redirect("/business/list");
    }
  });
};


module.exports = {
  displayAllRecord,
  showAllRecordPage,
  showAddContactPage,
  showEditContactPage,
  addContact,
  editContact,
  deleteContact,
};
