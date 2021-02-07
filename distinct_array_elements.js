let arrayChoices=["python","java","php","javascript","pascal","php","java","delphi"];
console.log("Original array", arrayChoices);
//Using only array
/*
let arrayUnique=new Array();
for(var i=0;i<arrayChoices.length;i++){
    if(arrayUnique.indexOf(arrayChoices[i])==-1){
        arrayUnique.push(arrayChoices[i]);
    }
}

console.log("Unique elements array (with array):", arrayUnique);
*/

//using Set
let arrayUniqueSet=Array.from(new Set(arrayChoices))
console.log("Unique elements array (with Set):", arrayUniqueSet)
