let arrayString=["Yennefer","Gerald","Triss"];
let arrayNumbers=[89,99,2,14,111];

//default sort function()^^
console.log(arrayString.sort());
console.log(arrayNumbers.sort());



let sortedNumbers=arrayNumbers.sort(function compareFn(firstEl, secondEl) { 
    const n1=parseFloat(firstEl);
    const n2=parseFloat(secondEl);
    if(n1==n2){
        return 0; //equal
    }else if(n1<n2){
        return -1; //smaller
    }else{
        return 1;//bigger
    }
 });
 console.log(sortedNumbers);
