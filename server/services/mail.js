var nodemailer = require("nodemailer");

console.log("password",process.env.MAIL_PASSWORD);

var transporter = nodemailer.createTransport({
  service : "xyz",
  host: "server2.test.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

var sendMail = function(mailOptions, callback) {
  transporter.sendMail(mailOptions, callback);
};

module.exports = {
  sendMail: sendMail
};
