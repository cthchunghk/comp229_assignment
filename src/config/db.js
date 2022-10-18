var prefix = 'mongodb+srv://';
var dbUrl = 'cluster0.jvedyi3.mongodb.net/';
var dbName = 'comp229';
var postfix='?retryWrites=true&w=majority';
var username = 'compuser';
var password='qNV4uYWrBdTELFdg';
var connString = prefix+username+':'+password+'@'+dbUrl+dbName+postfix;

module.exports = {
    connString: connString
}

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.jvedyi3.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });