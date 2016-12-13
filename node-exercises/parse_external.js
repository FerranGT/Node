var request = require('request');
var fs = require('fs');

var content = "https://nodejs.org/api/all.html";

request(content, function (error, response, body) {
	if (!error && response.statusCode == 200) {
    //console.log(body) // Show the HTML for the Google homepage.

    fs.writeFile("./body.txt", body, function(err) {
    	if(err) {
    		return console.log(err);
    	}

    	console.log("The file was saved!");

    	var content = fs.readFileSync("./body.txt", 'utf-8');

    	console.log(content);
    }); 
}
})