var express = require("express");
var router = express.Router();

var qr = require("../../services/qr_code");

var JwtHandler = require("../../services/jwt_handlers");

var emailTemplate = require("../../services/get_templete");

router.get("/:email", function(req, res) {
  var email = req.params.email;
  var token = JwtHandler.createJwt({
    email: email,
    name: "test"
  });
  //   res.type("png");
  //   arr = token.split(".");
  //   token = arr[1] + "." + arr[2];

  var img = qr.createQr(token).toString("base64");
  //   var html = '<img src="data:image/png;base64,' + img + '" />';
  var data = {
    name: "test",
    token: token,
    imgBase64: img
  };

  var html = emailTemplate(data);
  return res.send(html);
});

router.post("/create", function(req, res) {
  var body = req.body;
  console.log(body);
  if (typeof req.body.name == "undefined" || req.body.name == "") {
    return res.send("no name provided");
  }

  if (typeof req.body.email == "undefined" || req.body.email == "") {
    return res.send("no email provided");
  }

  var token = JwtHandler.createJwt(body);
  //   res.type("png");

  var img = qr.createQr(token).toString("base64");
  //   var html = '<img src="data:image/png;base64,' + img + '" />';
  var data = {
    name: req.body.name,
    token: token,
    imgBase64: img
  };

  var html = emailTemplate(data);
  return res.send(html);
});

module.exports = router;
