const fs = require('fs')
const request = require('request');
// 1st step - get array of links
const getLinks = ( fileName ) => {
	return new Promise( (resolve, reject) => {
		fs.readFile(fileName, 'utf-8',(err, links) => {
			"strict mode"
			if (err) {
				reject(err)
			} else {
				const linksArray = links.split('\n')
				resolve(linksArray)
			}
		})
	})
}
// 2nd step - get array of promises
const doRequestUrls = (links) => {
	const arrayPromisesRequest = links.map((link)=>{
		return new Promise( (resolve, reject)=>{
			request(link, function (error, response, body) {
				resolve(body.length+' - '+link);
				console.log(body.length+' - '+link);
			})
		})
	})
	return Promise.all(arrayPromisesRequest)// Promise.race(arrayPromisesRequest) nos devuelve el mas rapido
}

const writeFile = function (fileToWrite) {
    return new Promise( (resolve, reject) => {
        fs.writeFile('result.txt', fileToWrite, (err) =>{
            if (err) throw err;
            console.log('done!');
        })
    })
}

// 3th step - call promise
getLinks('./urls.txt')
	.then(doRequestUrls)
	.then(writeFile)


