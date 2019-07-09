var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

/* 
const mailOptions = {
  from: "thapa.manish16@gmail.com", // sender address
  to: "thapa.manish16@gmail.com", // list of receivers
  subject: "Subject of your email", // Subject line
  html: "<p>Your html here</p>" // plain text body
};
*/

var sendMail = function(mailOptions, callback) {
  transporter.sendMail(mailOptions, callback);
};

module.exports = {
  sendMail: sendMail
};
