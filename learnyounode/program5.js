var fs = require('fs');

var path = process.argv[2];
var extension = process.argv[3];
//console.log(path);
//console.log(extension);
var p = "."
var fullextension = p.concat(extension);
//console.log(fullextension);

fs.readdir(path, function (err, files) {
    if (err) throw err;
    	//console.log(files);
		files.filter(function (file) {
			//console.log(file.indexOf(fullextension));
	        if(file.indexOf(fullextension) != -1){
	        	//console.log("entro");
	        	console.log (file);
	        }
	    });
});

//JUANMA VERSION TUNEADA

// var fs = require('fs')
// var path = require('path')
// var dirName = process.argv[2];
// var fileExtension = "." + process.argv[3];

// fs.readdir(dirName, handleDirRead)

// function handleDirRead(err, listFiles) {
// 	if (err) return err;
// 	listFiles.forEach( showFilteredFile )
// }

// function showFilteredFile(fileName){
// 	if ( path.extname(fileName) === fileExtension ) {
// 		console.log(fileName);
// 	}
// }


//JUANMA VERSION

// var fs = require('fs')
// var path = require('path')
// var dirName = process.argv[2];
// var fileExtension = "." + process.argv[3];

// fs.readdir(dirName, function(err, listFiles) {
// 	if (err) return err;
// 	listFiles.forEach( function(fileName){
// 		if ( path.extname(fileName) === fileExtension ) {
// 			console.log(fileName);
// 		}
// 	})
// })

