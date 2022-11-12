
function fetchCustom(url, fn){ // we are mimicing the function
	// Download the content of the URL
	// this downloading can take sometime,
	// we will download the content from the url, and whatever will be the result, we wil pass to callback

	console.log("Starting Downloading from", url);
	setTimeout(function process(){
		console.log("Download Completed");
		let response = "Dummy Data";
		fn(response);
		console.log("Ending the function")
	},1000)
}

// Tasks:
// 1. Write function to download data from a url
// 2. Write a function to save that downlaoded data in a file and return filename
// 3. Write a function to upload the file written in the previous step to a new url


let response = fetchCustom("wwww.google.com", function downloadCallback(response){
	console.log("Downloaded response is",response);
});


