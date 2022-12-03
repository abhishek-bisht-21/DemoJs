// Temporal Dead Zone -> Prevents us to use variables declared with 'let' to be used before they are declared
// TDZ is not a error its just a saftey measure.

console.log("hello");
console.log("varname on line 4", varname);

// Declare
let varname;
// Default -> undefined
console.log("varname on line 9", varname);
varname = 10;
varname = 20;
console.log("varname on line 12", varname);