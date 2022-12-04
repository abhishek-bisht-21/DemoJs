// This keyword in node in non-strict mode.

// Part 1
console.log(this); //This keyword when logged globally in Nodejs Returns {} Empty Object

// Part 2
function showThis(){
	console.log(this); // This keyword when logged inside a function in Nodejs Returns Global Object
} 

showThis();

// Part 3
let obj = {
	name: "Abhishek",
	f: function(){
		console.log(this); // Return the Object Itself
	}
}

obj.f();

// Part 4

let obj1 = {
	name:"Abhishek Bisht",
	f:function(){
		function b(){
			console.log(this); // Returns the Global Object
		}
		b();
	}
}

obj1.f();

