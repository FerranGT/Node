var fs = require('fs');

var file = process.argv[2];

var content = fs.readFileSync(file, 'utf-8');

array = content.split(" ");
console.log(content);
console.log(array);