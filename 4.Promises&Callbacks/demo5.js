function test(){
	// for loop create a block again and again in each iteration
	for(let i=0;i<3;i++){
		setTimeout(function fun(){
			console.log(`i: ${i}`);
		},i*1000);
	}
}
// Try Predicting Output now
test();