var pdf = require("html-pdf");

function createPdf(html) {
  return new Promise(function(resolve, reject) {
    pdf.create(html).toBuffer(function(err, buffer) {
      if (err) return reject(err);
      return resolve(buffer);
    });
  });
}

module.exports = {
  createPdf: createPdf
};
