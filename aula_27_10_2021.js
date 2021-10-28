function bascakara(a, b, c){
    console.log("Inicia bascakara");
    //let raizes=[];
    let x1=calculaRaiz1(a,b,c);
    let x2=calculaRaiz2(a,b,c);
   // raizes.push(x1);
    //raizes.push(x2);
    console.log("Encerra bascakara");
   // return raizes;
   return [x1,x2];
}

function delta(a, b, c){
    console.log("Inicia delta");
    let d=Math.pow(b,2)-4*a*c;;
    console.log("Encerra delta");
    return d;
}

function calculaRaiz1(a,b,c){
    console.log("Inicia calculaRaiz1");
    let d=delta(a,b,c);
    let raiz=(-b + Math.sqrt(d))/(2*a);
    console.log("Encerra calculaRaiz1");
    return raiz;
}

function calculaRaiz2(a,b,c){
    console.log("Inicia calculaRaiz2");
    let d=delta(a,b,c);
    let raiz=(-b - Math.sqrt(d))/(2*a);
    console.log("Encerra calculaRaiz2");
    return raiz;
}


function fatorial(n){
    if(n==2){
        return n;
    }
    return n * fatorial(n-1);
}
console.log(fatorial(5));
//console.log(bascakara(2.0, 4.0, -6.0));