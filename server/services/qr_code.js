var qr = require("qr-image");

function createQr(data) {
  return qr.imageSync(data, "Buffer");
}

module.exports = {
  createQr
};
