function myFunction(parameterA, parameterB){
    let sum=parameterA+parameterB;
    return sum;
}

function myProcedure(parameterA, parameterB, result){
    let sum=parameterA+parameterB;
    parameterA=sum;
    parameterB=sum; // parameterA and parameterB are value parameters (primitive types)
    result[0]=sum;// result is a reference parameter (object reference)
}


let a=5;
let b=4;
let result=[null];
console.log("Function call:",myFunction(a,b),a,b);

console.log("Procedure call:",myProcedure(a,b,result),result,a,b);
