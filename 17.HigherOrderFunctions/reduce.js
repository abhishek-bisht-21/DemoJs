let myArr = [1,2,3,4,5];

let sumArr = myArr.reduce(function(accumulator,x){ // x are values at different indices in myArr.
	return accumulator + x;
},0) // Initial value of accumulator we are setting as 0.

console.log(myArr);
console.log(sumArr);