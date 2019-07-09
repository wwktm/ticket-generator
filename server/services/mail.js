var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thapa.manish16@gmail.com",
    pass: "pass"
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

var sendMail = function(mailOptions, fn) {
  transporter.sendMail(mailOptions, fn(err, info));
};

export default sendMail;
