console.log("--Begin for--");
for(let i=0;i<10;i++){
    
    if(i ==7){
        break;
    }
    
    if( i % 2 == 0) {
        continue;
    }
    console.log(i);
}
console.log("--End for--");

console.log("--Begin while--");
let i=0;
while(i<10){
    i++;
    if(i ==7){
        break;
    }
    if( i % 2 == 0) {
        continue;
    }
    console.log(i);
}
console.log("--End while--");
