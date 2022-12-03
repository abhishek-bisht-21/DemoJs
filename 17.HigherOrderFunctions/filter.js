let myArr = [1,2,3,4,5];

let evenArr = myArr.filter(function(x){
	if(x % 2 === 0){
		return x;
	}
})

console.log(myArr);
console.log(evenArr);
