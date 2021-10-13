//array definitions
let arrayA=[];
let arrayB=[1,2,4,5];
let arrayC=[1,"2",4,5,"Rafael"];
let arrayD= new Array();
//the length property and print arrays
console.log("length",arrayB.length);
console.log(arrayB);

//add new elements
console.log("---PUSH Method---");
arrayB.push(6);//add on end
console.log(arrayB);
console.log("---Direct index set---");
arrayB[2]=3;
arrayB[10]=9; //it creates empty/undefined entries until reach the defined index
console.log(arrayB);

//removing elements from array
console.log("---POP Method---");
arrayB.pop();//remove last element
console.log(arrayB);
console.log("---SHIFT Method---");
arrayB.shift();//remove first element
console.log(arrayB);
console.log("---SLICE Method---");
arrayB.slice(1,1);//remove especific index
console.log(arrayB);

//looping array
for(let i=0;i<arrayB.length;i++){
    console.log("array value on index:",i, arrayB[i]);
}

//filter
console.log("---Filter Method---");
let newArrayFiltered=arrayB.filter((el, index, array)=>{
    if(typeof(el)!= "undefined"){
        return true;
    }else{
        return false;
    }
});
console.log("Filtered", newArrayFiltered);

//map
console.log("---Map Method---");
let newArrayMapped=newArrayFiltered.map((el, index, array)=>{
    return el*2;//double array values
});
console.log("Mapped", newArrayMapped);

//reduce
console.log("---Reduce Method---");
let reducedValueSum=newArrayMapped.reduce((prevVal, el)=>{
    return prevVal+el;//sum all elements
});
console.log("Reduced - SUM", reducedValueSum);



//https://desenvolvimentoparaweb.com/javascript/map-filter-reduce-javascript/

