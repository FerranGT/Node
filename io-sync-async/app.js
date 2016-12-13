var fs = require('fs');

// SYNCHRONOUS read of file
// var contents = fs.readFileSync('./test.txt', 'utf-8');
// console.log("--------------------------------");
// console.log("content of file: " + contents);
// console.log("--------------------------------");
// console.log('Doing something else');
// console.log("--------------------------------");

// ASYNCHRONOUS read of file
// fs.readFile('./test.txt', function(err, contents) {
// 		if (err) {
// 			console.log("Something bad happened!")
// 		}
// 		else {
// 			console.log("content of file: " + contents);
// 		}

// });
// console.log('Doing something else');

// ASYNCHRONOUS read of file (using 'callback')
//
function showContent(err, contents) {
    console.log(contents);
}

fs.readFile('./test.txt', showContent);
console.log('Doing something else');



