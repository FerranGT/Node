Create a app.js that require another file called calculator.js
When we call node app.js we should show in the console the following:
The sum of 3 & 7 is: 10
The multiplication of 3 & 7 is: 21
app.js should only show in the console the result of calling the functions sum & multiplication
These methods should be defined (and exported) in calculator.js

Phase 2
Create a folder called operations and create in every folder a file exporting every operation needed in the main app.js file
app.js
operations/
    sum.js
    multiplication.js
    substraction.js
    division.js
    
Phase 3
Install the module moment and use it to show the current time in this way:
Today is : Monday, October 31st 2016, 10:08:34 am
The sum of 3 & 7 is: 10
The multiplication of 3 & 7 is: 21