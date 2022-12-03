// Function is also an object in JS -> Key Value Pair.
// Function in Js also have an extra feature -> code property that can be executed when we invoke that function.
function fn(){
	console.log("I am fn");
}

fn.prop = "property of fn function";
fn.myFn = function fn(){
	console.log("i am a method of function");
}
// console.log(fn);
fn();
fn.myFn();
console.log(fn.prop);