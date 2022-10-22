var prefix = "mongodb+srv://";
var dbUrl = "cluster0.jvedyi3.mongodb.net/";
var postfix = "?retryWrites=true&w=majority";

var dbName = "comp229";
var username = "compuser";
var password = "qNV4uYWrBdTELFdg";
var fullUrl =
  "mongodb+srv://<username>:<password>@cluster0.jvedyi3.mongodb.net/<dbname>?retryWrites=true&w=majority";
//var connString = prefix+username+':'+password+'@'+dbUrl+dbName+postfix;
fullUrl = fullUrl
  .replace("<username>", username)
  .replace("<password>", password)
  .replace("<dbname>", dbName);

function initializeDBConnection() {
  let mongoose = require("mongoose");

  //point mongoose to the DB URI
  mongoose.connect(fullUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let mongodb = mongoose.connection;
  mongodb.on("error", console.error.bind(console, "connection error:"));
  mongodb.once("open", () => {
    console.log("Database Connected");
  });
}

module.exports = {
    initializeDBConnection
};
