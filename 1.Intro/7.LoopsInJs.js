// Loops in Javascript


// For Loop in JS
for(let i=0;i<10;i++){
	console.log(i);
}


// For in Loop in jS

let obj =  {
	abhi : 90,
	ram : 91,
	shyam : 100,
	john : 81,
	tom : 92
};

for (const key in obj) {
	console.log(`Marks scored by ${key} is ${obj[key]}`)
}