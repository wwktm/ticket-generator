const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_STRING;

var _db;
console.log(url);

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) return err;
  console.log("Connected successfully to db server");
  _db = client.db("wwktm");
});

module.exports = {
  db: function() {
    return _db;
  }
};
