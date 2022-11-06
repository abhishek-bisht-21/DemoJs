function process() {
	console.log("Start");

	setTimeout(function exec() {
		console.log("Inside the timer")
	}, 2000)

	for (let i = 0; i < 100000000; i++) {
		//Something
	}

	console.log("End");
}

process();

console.log("After Calling process function")
for (let i = 0; i < 100000000; i++) {
	//Something
}

console.log("Last Line of global code")