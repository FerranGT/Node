var fs = require('fs')
var nameFile = process.argv[2];

fs.readFile(nameFile, function(err, contentBuffer) {
	var contentFile = contentBuffer.toString();
	var numNewlines = contentFile.split('\n').length - 1;
	console.log (numNewlines)
})





// var fs = require('fs');

// var path = process.argv[2];
// var extension = process.argv[3];
// //console.log(file);

// var content = '';

// fs.readFile(file, 'utf8', (err, data) => {
//   if (err) throw err;
//   content = data;
//   //console.log(content);
// });

// setTimeout(function() {
//   console.log(content.split("\n").length -1);
// }, 1000);

