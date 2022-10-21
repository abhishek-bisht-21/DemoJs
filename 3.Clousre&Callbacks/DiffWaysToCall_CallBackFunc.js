function fun(x, fn){

	for(let i=0;i<x;i++){
		fn();
	}
}

// 1) We can Pass Anonymous Functions as callback functions.
fun(2,function(){
	console.log("Anonymous func")
});

// 2) Second way Passing the Name of the Function, Rather than passing the function itself

function gun(){
	console.log("inside function gun")
}

fun(1,gun);