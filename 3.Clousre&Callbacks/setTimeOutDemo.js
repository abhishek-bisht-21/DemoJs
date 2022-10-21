console.warn("Start Task 1")	

let id1 = setTimeout(function execute(){
	console.log("Task 1 Completed After",10000, "ms");
}, 10000)
console.warn("End Task 1")

console.warn("Start Task 2")	

let id2 = setTimeout(function execute(){
	console.log("Task 2 Completed After",3000, "ms");
	clearTimeout(id1);
}, 3000)
console.warn("End Task 2")

	
