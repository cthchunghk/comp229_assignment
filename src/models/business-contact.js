let mongoose = require("mongoose");

let businessContactModel = mongoose.Schema(
  {
    name: String,
    phone: String,
    mail: String,
  },

  {
    collection: "contact_list",
  }
);

module.exports = mongoose.model(
  "contact_list",
  businessContactModel
);
