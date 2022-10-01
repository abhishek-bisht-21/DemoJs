// let gives a block scope.
// if we declare let outside the block scope, then also it won't get complete Global scope

{
	let x = 10;
	console.log(x)
}

function fun(){
	// console.log(y); -> Gives error Cannot access 'y' before initialisation
	let y = 10;
	console.log(y);
}


fun();