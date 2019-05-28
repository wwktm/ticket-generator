var express = require("express");
var router = express.Router();

var qr = require("../../services/qr_code");

var JwtHandler = require("../../services/jwt_handlers");

router.get("/:email", function(req, res) {
  var email = req.params.email;
  var token = JwtHandler.createJwt({
    email: email,
    name: "helloworld"
  });
  //   res.type("png");

  var img = qr.createQr(token).toString("base64");
  var html = '<img src="data:image/png;base64,' + img + '" />';
  return res.send(html);
});

module.exports = router;
