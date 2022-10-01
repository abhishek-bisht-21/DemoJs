{
	let x = "Hello";
	console.log(x);
	var a = 10
	{
		console.log(x)
	}
}

console.log(a)

function fun(){
	console.log(x); // Why we get undefined is lexical scoping
	var x = 20
	console.log(x);

}

fun();