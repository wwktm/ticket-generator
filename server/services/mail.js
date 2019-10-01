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
