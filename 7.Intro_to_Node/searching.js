function linearSearching(arr,x){
	for(let i=0;i<arr.length;i++){
		if(arr[i] === x){
			return i;
		}
	}

	return NaN;
}

function binarySearch(arr,x){

	let start = 0;
	let end = arr.length - 1;
	

	while(start <= end){
		let mid = Math.floor((start + end) / 2);
		if(arr[mid] === x){
			return mid;
		}
		else if(arr[mid] < x){
			start = mid+1;
		}else{
			end = mid-1;
		}
	}

	return NaN;
}

console.log("Ending Searching");

module.exports = {
	linear : linearSearching,
	binary : binarySearch
}