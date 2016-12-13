var fs = require('fs');
var fileToBeRead = process.argv[2];
var id = process.argv[3];
var column = process.argv[4]; // location
var headers, columnNumber;
var indexRows, row;

var content = fs.readFileSync(fileToBeRead, 'utf-8')
var rows = content.split('\n');

// console.log(rows)
// console.log(rows.length - 1 )

var items = rows.map(function( row, i ) {
	return row.split(',')
})

console.log(items);

indexRows = items.map( function(row) {
	return row[0]
})

console.log(indexRows);
row = indexRows.indexOf(id)

headers = items[0];
columnNumber = headers.indexOf(column);

console.log("-------------------------")
console.log(content);
console.log("-------------------------")
console.log("value on id:" + id +", column:" + column + " => " + items[row][columnNumber])