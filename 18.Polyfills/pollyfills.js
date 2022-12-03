// // Map

// let myArr = [1,2,3,4,5];
// let squaredArr = myArr.map(function(x){
// 	return x*x;
// })

// console.log(myArr);
// console.log(squaredArr);

// // Custom Map

// function myPolyFillMap(arr,cb){
// 	let newArr = [];

// 	for(let i=0;i<arr.length;i++){
// 		newArr.push(cb(arr[i]));
// 	}

// 	return newArr;
// }

// function square(x){
// 	return x*x;
// }

// let squaredPolyfillArr = myPolyFillMap(myArr,square);
// console.log(squaredPolyfillArr);


console.log("__________________________________________________________________");


// Filter

let farr = [1,2,3,4,5];
let newfarr = farr.filter(function(x){
	return x % 2 === 0;
})

console.log(farr);
console.log(newfarr);

function myPolyfillFilter(arr,cb){

	let filteredArr = [];
	for(let i=0;i<arr.length;i++){
		if(cb(arr[i])){
			filteredArr.push(arr[i]);
		}
	}

	return filteredArr;
}

function filterEven(x){
	if(x%2 === 0){
		return x;
	}	
}

let filteredPolyfillArr = myPolyfillFilter(farr,filterEven);
console.log(filteredPolyfillArr);