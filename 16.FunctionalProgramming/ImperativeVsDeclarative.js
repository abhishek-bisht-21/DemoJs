// Problem -> Is the square of a number even.

// Imperative Way of Writing code -> Focuses on Steps(how to go) 
const x = 4;
const xSquared = x*x;
let isEven;
if(xSquared % 2 === 0){
	isEven = true;
}else{
	isEven = false;
} 
console.log(isEven);

// Declarative way of writing code -> focuses What is the problem
const isSquareEven = (x) => ((x*x) % 2 === 0 ? true:false)
console.log(isSquareEven(5));