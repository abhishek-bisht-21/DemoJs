// Map

let myArr = [1,2,3,4,5];
let squaredArr = myArr.map(function(x){
	return x*x;
})

console.log(myArr);
console.log(squaredArr);

// Custom Map

function myPolyFillMap(arr,cb){
	let newArr = [];

	for(let i=0;i<arr.length;i++){
		newArr.push(cb(arr[i]));
	}

	return newArr;
}

function square(x){
	return x*x;
}

let squaredPolyfillArr = myPolyFillMap(myArr,square);
console.log(squaredPolyfillArr);