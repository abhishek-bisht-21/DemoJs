/* 
 todo function is already completed then we are calling fun function and it is still able 
 to remember the "task" variable. 
*/
function todo(task){
	console.log("Start of Todo");
	setTimeout(function fun(){
		console.log("Completed", task);
	}, 5000);
	console.log("End of Todo");
}

console.log("Starting");
todo("assignments");
console.log("Ending");
