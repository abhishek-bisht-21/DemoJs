console.log("line number 1", varname);
var varname = 10;
console.log("line number 3", varname);
function fn(){
	console.log("line number 5",varname);
	var varname = 20;
	function b(){
		console.log("line number 8",varname);
	}
	b();
}
fn();
console.log(varname);

// Functions are allocated memory in the heap.
// With every function call a new execution context is created and whole process of 
// memory allocation phase and code execution phase takes place.


// Scope -> Area where a function or a variable can be found.