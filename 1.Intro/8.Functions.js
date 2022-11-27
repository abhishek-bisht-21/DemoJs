// We can return anything from a javascript function. At a single instance depending on the condtion or use
// case we can return different types of JS values from the function (Ex using if-else) in functions.

// Function Statement
function calAverage(a,b){
	return (a+b)/2;
}


let a = 10;
let b = 5;


let ans  = calAverage(a,b);

console.log("Average of "+a+" and "+b+" is "+ans )

const sum = (p,q) => { 
	return p+q;
}

console.log("Sum of "+a+" and "+b+" is "+sum(a,b))


// Function are First Class Citizens, simply means that Functions can be treated as variables.
// Function Expression -> Assignment of a function in a variable is possible.
let a = [1,2,3,4,5]; // Array can also be assigned in a variable.
let b = a;
console.log(b);

let funcContainer = function fn(){
	console.log("I am an Expression");
}