function fun() {
	console.log("Fun called");

	setTimeout(function process() {
		console.log("Inside the 7s timeout");
	}, 7000)


	setTimeout(function process() {
		console.log("Inside the 3s timeout");
	}, 3000)
}

fun();

for (let index = 0; index < 10000000000; index++) {
	// something

}


setTimeout(function last() {
	console.log("Inside the 0s timeout");
},0)