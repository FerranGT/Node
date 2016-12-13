var fs = require('fs');

var file = process.argv[2];
//console.log(file);

var content = fs.readFileSync(file, 'utf-8');

//console.log(text);

console.log(content.split("\n").length -1);