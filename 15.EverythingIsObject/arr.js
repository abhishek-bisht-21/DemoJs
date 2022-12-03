// Objects are emulated as arrays in javascript
let object = {
	name: "Abhishek",
	age: 22,
	sayHi: function(){
		console.log("Abhishek say's Hi");
	}
}

// loop
// for(let key in object){
// 	console.log(key, " : ", object[key]);
// }

console.log("______________________________________________")

const a=10;
const arr = [1,2,3,4,5];
// How is this possible ?
// arr.shift();
// console.log(arr);

//console.log("______________________________________________")

// In javascript arrays are not there.They are actually object only.
arr.myprop = "Hello";
//console.log(arr);
arr.print = function(){
	console.log("print function called");
}

arr[96] = 100;
console.log(arr.length)
console.log(arr);
//console.log(arr);

// loop
for(let key in arr){
	console.log(key, " : ", arr[key]);
}
