var fs = require('fs');

var destination = process.argv[2];

var text = process.argv[3];

fs.writeFile(destination, text, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");

    var content = fs.readFileSync(destination, 'utf-8');

	console.log(content);
}); 

