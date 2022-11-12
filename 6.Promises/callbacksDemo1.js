// Tasks:
// 1. Write function to download data from a url
// 2. Write a function to save that downlaoded data in a file and return filename
// 3. Write a function to upload the file written in the previous step to a new url

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
	},1000);
}


function writeFile(data, fn){
	console.log("Started Writing data", data);

	setTimeout(function process(){
		console.log("Completed Writing data");
		let filename = "output.txt";
		fn(filename);
		console.log("Writing Ended");
	}, 5000);
}


function uploadFile(filename, newurl,fn){
	console.log("Upload Started");
	setTimeout(function process(){
		console.log("File", filename, "Upload Successfully on", newurl);
		let uploadResponse = "SUCCESS";
		fn(uploadResponse);
		console.log("Upload Ended");
	},2000);
}

let response = fetchCustom("wwww.google.com", function downloadCallback(response){
	console.log("Downloaded response is",response);
});


