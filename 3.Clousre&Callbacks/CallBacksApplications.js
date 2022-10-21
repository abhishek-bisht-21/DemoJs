let arr = [1,2,3,4,5];

arr.map(function process(value,index){  // Argument to this map function expects a callback function
	console.log(value,index);
});

let x = arr.map(function process(value,index){  // Map function returns a new array
	console.log(value,index);
	// On every element the map function calls this process function, and whatever task we perform inside
	// the callback function(process) it sends it into a new array.
	return value * value; 
});

console.log(x);
console.log(arr);
