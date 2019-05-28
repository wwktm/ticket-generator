var env_file_path = process.env.ENV_FILE_PATH || __dirname + "/.env";
require("dotenv").config({ path: env_file_path });

var express = require("express");
app = express();
var http = require("http").Server(app);

var bodyParser = require("body-parser");

var node_env = process.env.NODE_ENV || "";

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 5000 })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./server/app/app.controller.js")(app);

http.listen(port, function() {
  console.log("listening on *:" + port);
});
