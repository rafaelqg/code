//worst case and best: O(n log n)
let array_length;
let instructionCounter=0;

/* to create heap max structure: a binary tree which every node is bigger or equals thnn its leaves.
This function analyse for an node if it respects the heap max structure, otherwhise fix it, and call again
recursivaly until not swap is necessary.
*/  
function heap_root(input, i) {
    instructionCounter++;
    let left = 2 * i + 1; // left leaf position
    let right = 2 * i + 2;  // right leaf position
    let max = i;// node position

    //verifies if left leaf is bigger than node
    if (left < array_length && input[left] > input[max]) {
        max = left;
    }
    //verify if right leaf is bigger than node
    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    //if there was some leaf bigger than the node, they are swap, and the heap_root is called again
    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    let temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    instructionCounter=0;
    array_length = input.length;

    //first step ist create a heap structure based on the initial array it received as input.
    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }
      console.log("Heap Structure",input);
    //once the heap is created the bigger element is always the heap root, than is jus necessary 
    //that the root element as bigger, and then build a new heap without the previous root.
    for (i = input.length - 1; i > 0; i--) {
        instructionCounter++;
        swap(input, 0, i);// the root element is preserverd as bigger (as part of sorting output)
        array_length--;// once th newe root was the biggest, after it being evaluated, the array size is reduced for this node do not be considered in next round
        console.log("heap length",  array_length, input.slice(0, array_length));
        heap_root(input, 0);// call for a new heap_sorting using the new element as root.
    }
}

let n=100;
let input=[];//array is already sorted in the inverse order
for(i=0;i<n;i++){
    input[n-i-1]=i;
}
heapSort(input);
console.log("Intructions counter overview (loops iterations and recursive calls):",instructionCounter);
console.log("Sorted",input);