console.log("JS Tutorial on Let, var,const");

// Var can be redeclared, whereas let can't be.
// Var has global scope and can be updated and redeclared
var a = 45;
var a = null;

var b = 'Abhi';
var c = null;
var d = undefined;

// Let can be updated but can't be redeclared
let k = "Abhi"
let k = "Shake" // Throws error

const author = "Abhishek"; // Const must be initialised when they are declared unlike let and var
let author = "abc"; // Throws error bcoz const variable can't changed


{	// Let works in block level scope.
	let b = "Bisht"
	console.log("Inside the block value of b: ",b);
}

console.log("Global Scope value of b: ",b);