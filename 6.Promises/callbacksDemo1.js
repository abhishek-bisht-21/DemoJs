
function fetchCustom(url, fn){ // we are mimicing the function
	// Download the content of the URL
	// this downloading can take sometime,
	// we will download the content from the url, and whatever will be the result, we wil pass to callback

	console.log("Starting Download");
	setTimeout(function process(){
		console.log("Download Completed");
		let response = "Dummy Data";
		fn(response);
	},1000)
}

let response = fetchCustom("wwww.google.com", function downloadCallback(response){
	console.log(response);
});


