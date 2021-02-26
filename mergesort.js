//worst case: runs in O(nlogn) - non inplace
//best case: runs in O(nlogn))

let instructionCounter=0;

function mergeSort(array) {
    const half = array.length / 2
    instructionCounter++;
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        instructionCounter++;
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift());  //shift: returns the first element and removes it from array.
        } else {
            arr.push(right.shift()); 
        }
    }
    
    // Concatenating the subarrays
    return [ ...arr, ...left, ...right ];// spread operator: return all array elements as inputs to the new one
}

let n=100;
let bestCaseInput=[];//array is already sorted
for(i=0;i<n;i++){
    bestCaseInput[i]=i;
}
let worstCaseInput=[];//array is already sorted in the inverse order
for(i=0;i<n;i++){
    worstCaseInput[n-i-1]=i;
}
let sortedArray=null;
console.log(bestCaseInput, worstCaseInput);
sortedArray=mergeSort(bestCaseInput);
console.log("Instructions best case",instructionCounter,  sortedArray);
instructionCounter=0;
sortedArray=mergeSort(worstCaseInput);
console.log("Instructions worst case",instructionCounter,  sortedArray);