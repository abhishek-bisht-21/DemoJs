const add = (function exec(){
	let counter=0;
	return function process(){
		counter++;
		//console.log(counter);
		return counter;
	}
})();

console.log(add())
console.log(add())
console.log(add())

