var fs = require('fs')
var concat = require('concat-stream')

var streamFileRead = fs.createReadStream('test.txt', 'utf-8');

var addAndManageChunksData = concat( function(totalText)  {
    console.log( 'There are ' + totalText.split(' ').length + ' words in the file' )
}) // returns a writable stream

streamFileRead
	.pipe( addAndManageChunksData )

// var countBlocks = 0;
// var totalText = "";

// streamFileRead.on('data', function(chunkDataBuffer) {
// 	var contentChunk = chunkDataBuffer.toString();
// 	totalText += contentChunk;
// })

// streamFileRead.on('end', function() {
// 	console.log ("Read of file ended!")
// 	//console.log( totalText.split(' ') )
// 	console.log( 'There are ' + totalText.split(' ').length + ' words in the file' )
// })