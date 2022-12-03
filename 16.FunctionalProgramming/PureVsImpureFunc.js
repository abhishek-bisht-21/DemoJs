//  Impure

// If we keep changing the value of a, and call the addNum function with same argument then
// even with same argument it gives us different result.
let a = 9;
function addNumImpure(b){
	console.log("The sum is ", a+b);
}

addNumImpure(2);
addNumImpure(2);

// Pure Function -> Doesn't depend on any external factor or variables
function addnumPure(a,b){
	console.log('the sum is',a+b)
}
addnumPure(3,2);