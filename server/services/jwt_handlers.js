var jwt = require("jsonwebtoken");
var jwtSecret = process.env.JWT_SECRET;

function createJwt(data) {
  console.log(jwtSecret);
  return jwt.sign(data, jwtSecret);
}

module.exports = {
  createJwt: createJwt
};
