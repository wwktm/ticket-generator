var handlebars = require("handlebars");
var fs = require("fs");

var source = "";
// read the file and use the callback to render
fs.readFile(__dirname + "/../template/mail1.hbs", function(err, data) {
  if (!err) {
    // make the buffer into a string
    source = data.toString();
  } else {
    // handle file read error
    console.log("error while getting templete file");
    console.log(err);
  }
});

function compile(data) {
  var template = handlebars.compile(source);
  var outputString = template(data);
  return outputString;
}

module.exports = compile;
