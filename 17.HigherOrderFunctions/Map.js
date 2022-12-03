let myArr = [1,2,3,4,5];

// map is a higher order function it takes function as an argument.
// Map function one by one picks the elements in myArr and perform the desired activity/task on it.
let newArr = myArr.map(function(x){
	return x*x;
});

console.log(myArr);
console.log(newArr);