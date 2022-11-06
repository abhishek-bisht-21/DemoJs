function process() {
	console.log("Start");

	setTimeout(function exec() {
		console.log("Inside the timer")
	}, 0)

	for (let i = 0; i < 100000000; i++) {
		//Something
	}

	console.log("End");
}

process();

console.log("Last Line of global code")