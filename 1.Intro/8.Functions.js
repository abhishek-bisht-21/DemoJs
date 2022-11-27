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
funcContainer();

let funcContaainer2 = function(){ // Giving name here is optional.
	console.log("I am an Anonymous function")
}
funcContaainer2();


// IIFE -> Immediately Invoked Function Expression
// Required in :  Pollution
(function fn(){
	console.log("I am an IIFE");
	console.log("I will run on my own")
})();

// Arrow Function -> USED FOR: to smaller the syntax, react, this
let fn = (num) => {
	return num * num;
}

let fn1 = num => num * num; // When we have only single parameter and single line of code inside body of function
