var db = require("../app/db").db;

var storeToDb = function(data, callback) {
  //   console.log("db call", db());
  db()
    .collection("tickets")
    .insertOne(data, callback);
};

module.exports = {
  storeToDb: storeToDb
};
