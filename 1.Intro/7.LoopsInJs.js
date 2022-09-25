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


// For of loop (Works for something which is iterable)

let arr = [10,20,30,40,50];

for(let i of arr){
	console.log(i);
}


let marks =  {
	harry:90,
	shubham:91,
	lovish:92,
	Monika:93,
	Ritika:94

}

for(let i=0;i<Object.keys(marks).length;i++){
	console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[ Object.keys(marks)[i]]);
}