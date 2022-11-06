function process() {
	console.log("Start");

	setTimeout(function exec() {
		console.log("Inside the timer 1")
	}, 10000)

	setTimeout(function exec() {
		console.log("Inside the timer 2")
	}, 3000)

	for (let i = 0; i < 100000000; i++) {
		//Something
	}

	console.log("End");
}

process();

console.log("Last Line of global code")