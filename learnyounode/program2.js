//var arraynumber = Number(process.argv);

//console.log(process.argv);
var length = process.argv.length;
var sum=0;
var number=0;
for(var i=2; i<length; i++){
	//console.log(process.argv[i]);
	number = Number(process.argv[i]);
	sum += number;
}
console.log(sum);