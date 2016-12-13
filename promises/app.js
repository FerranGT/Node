
const fs = require("fs")

fs.readFile('test.txt', 'utf-8', (err, contentFile) => {

	setTimeout( ()=> {

		contentFile = contentFile.toUpperCase();

		fs.writeFile('output.txt', contentFile, (err) => {
			console.log("file written")
		})

	}, 2000)

})