var sum = require('./operations/sum');
var multiplication = require('./operations/multiplication');
var division = require('./operations/division');
var substraction = require('./operations/substraction');

var moment = require('moment');
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

console.log (today);

console.log ('The sum of 3 & 7 is: ' + sum(3,7) )
console.log ('The multiplication of 3 & 7 is: ' + multiplication(3,7) )
console.log ('The substraction of 10 & 3 is: ' + substraction(10,3) )
console.log ('The division of 25 & 5 is: ' + division(25,5) )