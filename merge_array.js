let array1=["Wesker","Chris", "Berry"];
let array2=["Claire","Sherry", "Berry"];
let arrayConcat=array1.concat(array2);
console.log(arrayConcat);

arrayUniqueElements=arrayConcat.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})

console.log(arrayUniqueElements);