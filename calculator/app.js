var sum = require("./operations/sum.js");
var multiplication = require("./operations/multiplication.js");
var substraction = require("./operations/substraction.js");
var division = require("./operations/division.js");

var moment = require('moment');
console.log("Today is : " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a")); 

console.log("The sum of 3 & 7 is: " + sum(3,7));

console.log("The multiplication of 3 & 7 is: " + multiplication(3,7));

console.log("The substraction of 3 & 7 is: " + substraction(3,7));

console.log("The division of 3 & 7 is: " + division(3,7));