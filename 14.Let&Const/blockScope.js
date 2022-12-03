// {} -> Block

let fruit = "apple";
console.log(fruit);
{
	// Whenever a block is encountered then the memory is allocated for 'let' in that block
	let fruit;
	console.log(fruit);
	fruit = "orange";
	console.log(fruit);
}
console.log(fruit)
