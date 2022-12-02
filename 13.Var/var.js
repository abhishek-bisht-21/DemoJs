// 2015 ES6
// Hoisting
console.log("line number 1", varname);
// Declare
var varname;
// Assign
varname = 10;
console.log("line number 8",varname);
// reassign
varname = 20;
console.log("line number 11",varname);
var varname;
console.log("line number 13",varname);

