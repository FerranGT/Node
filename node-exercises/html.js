var request = require('request');
var fs = require('fs');

var file = process.argv[2];

var content = fs.readFileSync(file, 'utf-8');

console.log(content);

request(content, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})