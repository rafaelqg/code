//complexity: logn
let binarySearch = function (array, searchElement, start, end) { 
    instructionCounter++;
	if (start > end) return -1; 
	let middleIndex=Math.floor((start + end)/2); // Find the middle index 
    if (array[middleIndex]===searchElement) return middleIndex; //verify if element was found 	
	// If element at mid is greater than searchElement,search in the left half of mid 
	if(array[middleIndex] > searchElement) {
		return binarySearch(array, searchElement, start, middleIndex-1); 
    }else{
		// If element at mid is smaller than searchElement, then search in the right half of mid 
		return binarySearch(array, searchElement, middleIndex+1, end); 
    }
} 

//Evaluating complexity: best and worst case
let n=10000;
let arrayInput=[];//array is already sorted
for(i=0;i<n;i++){
    arrayInput[i]=i;
} 
//Best case example
let searchElement = arrayInput[Math.floor((arrayInput.length-1)/2)];//best case: exactly on the middle of the array
let instructionCounter=0;
let searchResult=binarySearch(arrayInput, searchElement , 0, arrayInput.length-1);
if (searchResult>-1){
	console.log("Element found at index:", searchResult); 
}else{
    console.log("Element not found!"); 
} 
console.log("Instructions on best case:", instructionCounter);
// Worst case example
instructionCounter=0;
searchElement = n; //worst case: an element that is not on the list
searchResult=binarySearch(arrayInput, searchElement , 0, arrayInput.length-1);
if (searchResult>-1) {
    console.log("Element found at index:",searchResult); 
}else{
    console.log("Element not found!"); 
}
console.log("Instructions on worst case:", instructionCounter);
									 
