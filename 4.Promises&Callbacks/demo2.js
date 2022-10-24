function todo(task){
	console.log("Start of Todo");
	setTimeout(function fun(){
		console.log("Completed", task);
	}, 5000);
	task = "abhishek" // In closure it remembers the varible and not the value.
	console.log("End of Todo");
}

console.log("Starting");
todo("assignments");
console.log("Ending");
