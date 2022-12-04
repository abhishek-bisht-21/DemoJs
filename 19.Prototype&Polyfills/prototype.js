Array.prototype.myFunction = function(){
	console.log(this); // This points to the array itself
}

let arr = [1,2,3,4,5];

arr.myFunction();

// Prototype + polyfills
Array.prototype.myMap = function(cb){
	let newArr = [];

	for(let i=0;i<this.length;i++){
		newArr.push(cb(this[i]));
	}

	return newArr;
}

function square(x){
	return x*x;
}


let mappedArr = arr.myMap(square);
console.log(mappedArr);

console.log("_____________________________________________")

Array .prototype.myFilter = function(cb){
	let newArr = [];
	for(let i=0;i<this.length;i++){
		if(cb(this[i])){
			newArr.push(this[i]);
		}
	}

	return newArr;
}

function isEven(x){
	return x%2===0?true:false
}

let filteredArr = arr.myFilter(isEven);
console.log(filteredArr);