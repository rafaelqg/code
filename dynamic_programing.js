const dynamicProgrammingResultStore= new Array();
let loopCounter=0;
function factorial(number){
    loopCounter=0;
    if(dynamicProgrammingResultStore[number] != undefined){
        console.log("Result already stored.");
        return dynamicProgrammingResultStore[number];
    }
    console.log("Calculating output...");
    let result=1;
    const numberInput=number;
    while(number>1){
        result*=number;
        number--;
        loopCounter++;
    }
    dynamicProgrammingResultStore[numberInput]=result;
    return result;
}

console.log("Factorial:", 5, factorial(5), "LoopCounter", loopCounter);
console.log("Factorial:", 5, factorial(5), "LoopCounter", loopCounter);

console.log("Factorial:", 25, factorial(25), "LoopCounter", loopCounter);
console.log("Factorial:", 25, factorial(25), "LoopCounter", loopCounter);

console.log("Factorial:", 12, factorial(12), "LoopCounter", loopCounter);
console.log("Factorial:", 12, factorial(12), "LoopCounter", loopCounter);

console.log("Factorial:", 5, factorial(5), "LoopCounter", loopCounter);

console.log("Factorial:", 5, factorial(5), "LoopCounter", loopCounter);

console.log("Factorial:", 5, factorial(5), "LoopCounter", loopCounter);

console.log("Factorial:", 5, factorial(12), "LoopCounter", loopCounter);
console.log("Factorial:", 5, factorial(25), "LoopCounter", loopCounter);