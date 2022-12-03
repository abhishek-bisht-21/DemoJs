// Variable Shadowing

// Legal Variable Shadowing

// 1
var fruit1 = "apple";
console.log(fruit);
{	// Inner Variable inside the block, Shadows the outer fruit variable
	let fruit1;
	console.log(fruit1);
	fruit1 = "orange";
	console.log(fruit1);
}
console.log(fruit1)

// 2
let fruit2 = "apple";
console.log(fruit2);
{	// Inner Variable inside the block, Shadows the outer fruit variable
	let fruit2;
	console.log(fruit2);
	fruit2 = "orange";
	console.log(fruit2);
}
console.log(fruit2)

// 3
const fruit3 = "apple";
console.log(fruit3);
{	// Inner Variable inside the block, Shadows the outer fruit variable
	let fruit3;
	console.log(fruit3);
	fruit3 = "orange";
	console.log(fruit3);
}
console.log(fruit3)



// Illegal Shadowing
let fruit = "apple";
console.log(fruit);
{	// Inner Variable inside the block, Shadows the outer fruit variable
	var fruit = "orange"; // var donot have block scope thats y. Whenever a variable's scope goes beyond its block, then shadowing is considered illegal
	console.log(fruit);
	
}
console.log(fruit)