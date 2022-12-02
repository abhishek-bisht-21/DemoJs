// By default JS Execution context gives us these 2 things. This and Global
// In browser 'this' is by default equal to window object.
// Code which is outside the any function in the javascript that is called as global code.
// function  inside ❌ -> global area
// In the node js 'this' is equal to the empty object.
// in the browser 'this' is equal to the window object

console.log(global); // In browser we have similar object which is called as the window object.
console.log(this);

// There is a creation phase in the javascript, before our code runs in js engine, it gets memory
// allocated to it. Variables are allocated memory in this 1st phase and is given a special keyword
// undefined and this is popularly known as hoisting.

// Hoisting for variables
console.log("a is ",a);
var a ;
console.log("a is ",a);
a = 10;
console.log("a is ",a);

// Hoisting for function statements
fn();
function fn(){
	console.log("I can be called before my declaration");
}
fn();