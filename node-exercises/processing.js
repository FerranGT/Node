var fs = require('fs')
var concat = require('concat-stream')
 
var readStream = fs.createReadStream("./test.txt", {
      flags: 'r',
      encoding: 'utf-8',
      fd: null,
      mode: 0666,
      bufferSize: 64 * 1024
    });

var concatStream = concat(valuesarray)
var outputarray = [];
var i = 0;
 
readStream.on('error', handleError)
readStream.pipe(concatStream)
 
function valuesarray(imageBuffer) {
	//console.log(imageBuffer);
	console.log(i);
	outputarray[i] = imageBuffer;
	i++;
	console.log(outputarray);
	// console.log(outputarray[1]);
 
}
 
function handleError(err) {
  // handle your error appropriately here, e.g.: 
  console.error(err) // print the error to STDERR 
  process.exit(1) // exit program with non-zero exit code 
}

