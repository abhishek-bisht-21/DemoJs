console.log("JS Tutorial on Let, var,const");

// Var can be redeclared, whereas let can't be.
var a = 45;
var a = null;

var b = 'Abhi';
var c = null;
var d = undefined;

const author = "Abhishek";
let author = "abc"; // Throws error bcoz const variable can't changed


{	// Let works in block level scope.
	let b = "Bisht"
	console.log("Inside the block value of b: ",b);
}

console.log("Global Scope value of b: ",b);