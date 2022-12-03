//  Impure

// If we keep changing the value of a, and call the addNum function with same argument then
// even with same argument it gives us different result.
let a = 9;
function addNumImpure(b){
	console.log("The sum is ", a+b);
}

addNumImpure(2);
addNumImpure(2);

// Pure Function -> Doesn't depend on any external factor or variables.
// With same arguments pure functions always gives us same result.
function addnumPure(a,b){
	// Console.log Mutuates the external screen to show us our output
	//console.log('the sum is',a+b)  -> Side Effects
	// To avoid Side Effects we can always use return
	return a+b;
}
console.log(addnumPure(3,2));