// 1) How to initialise functional, global or block scope in JS.
// 2) 
{
	let x = "Hello";
	console.log(x);
	var a = 10; // becomes global because of var
	{
		console.log(x)
	}
}

// console.log(x) -> Throw an error  
console.log(a)

function fun(){
	console.log(x); // Why we get undefined is lexical scoping
	var x = 20;
	console.log(x);

}

if(true){
	var z = 50;
}

if(false){
	var y = 60;
}

console.log(z);
console.log(y);


fun();