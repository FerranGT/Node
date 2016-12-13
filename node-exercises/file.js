var fs = require('fs')
var path = require('path')
var dirName = process.argv[2];

fs.readdir(dirName, function (err, files) {
    if (err) throw err;
   
		files.filter(function (file) {

			stats = fs.lstatSync(file);

    		if (stats.isDirectory()) {
    			console.log ("DIR: " + file);

    		}else{
    			console.log ("FILE: " + file);
    		}
	        
	    });
});




   