function fun(x, fn){
	/*
		x -> Number
		fn -> callback function
	*/

	// Some logic
	for(let i=0;i<x;i++){
		console.log(i);
	}

	fn(); // Calling the callback function passed 
}

fun(10, function log(){
	// This is the callback function
	console.log("Custom Logger")
})