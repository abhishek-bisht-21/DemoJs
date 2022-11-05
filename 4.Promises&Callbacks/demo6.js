function test(){
	// for loop create a block again and again in each iteration
	for(var i=0;i<3;i++){
		let j = i;
		setTimeout(function fun(){
			console.log(`j: ${j}`);
		},i*1000);
	}
}
// Try Predicting Output now
test();