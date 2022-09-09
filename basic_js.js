//1. Variables, constants and data types
//2. Arithmetics and Logical Operators
//3. Deviation structures 
//4. Repeat structures
//5. Functions
let x = 5;
x = 15;
console.log(x);
const y = 6.5;
let name = "Rafael";
let jsIsNice = true;
console.log(typeof(x), typeof(y), typeof(name), typeof(jsIsNice));
let z = x + y;
console.log(z);
console.log( x < y, jsIsNice == true, !jsIsNice, "1" == 1, "1" === 1);

if( x < y){
    console.log("X is smaller than Y", x, y);
}else if(!jsIsNice){
    console.log("Y is smaller than X", x, y);
}

let dayPeriod = 2;
switch(dayPeriod){
    case 1:
        console.log("It is morning");
        break;
    case 2:
        console.log("It is afternoon");
        break;
    case 3:
        console.log("It is night");
}

for(let i = 0; i < 24; i++){
    console.log("The current hour is:", i);
}

let n = 3;
while(n < 27){
    n = n * 2;
    console.log("n", n);
}
console.log("while ends", n);

function sum (n1, n2){
    return n1 + n2;
}

let mult = function (n1, n2){
    return n1 * n2;
};

let sub = (n1, n2) => {
    return n1 - n2;
};

console.log("sum", sum(3, 5));
console.log("sum", mult(3, 5));
console.log("sum", sub(3, 5));
