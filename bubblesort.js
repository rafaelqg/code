//worst case: runs in O(n²) - square complexity
//best case: runs in O(n) - linear

let instructionCounter=0;
let bubbleSort = function (input) {
    instructionCounter=0;
    let length = input.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < length; i++) {
            instructionCounter++;
            if (input[i] > input[i + 1]) {
                let tmp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = tmp;
                swapped = true;
                
            }
        }
    } while (swapped);
    return input;
};
let n=100;
let bestCaseInput=[];//array is already sorted
for(i=0;i<n;i++){
    bestCaseInput[i]=i;
}
let worstCaseInput=[];//array is already sorted in the inverse order
for(i=0;i<n;i++){
    worstCaseInput[i]=n-i;
}
console.log(bestCaseInput, worstCaseInput);
bubbleSort(bestCaseInput);
console.log("Instructions best case",instructionCounter, bestCaseInput);
bubbleSort(worstCaseInput);
console.log("Instructions worst case",instructionCounter, worstCaseInput);

