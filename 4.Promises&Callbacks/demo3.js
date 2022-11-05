// variables persist in the memory and hence we are able to use it later on.
// function b is executed after function a is already executed and still
// function b is able to access "name" variable which has the lexical scope of a.
function a(name){
	return function b(){
		console.log(name);
	}
}

let x = a("Sanket");
console.log(x);
x();