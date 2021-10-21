function soma(n1,n2){
    let x=n1+n2;
    console.log("DEBUG Soma:",x);
    return x;
}
function mediaProcedimento(n1,n2){
    let z=n1+n2;
    let media=z/2;
    console.log("Soma:",z);
    console.log("Média:",media);
}

function digaOla(){
    console.log("Olá! Boa noite!");
}
digaOla();
let somaExemplo=soma(8,9);
console.log("Soma função:",somaExemplo);
somaExemplo=soma("abc","xyz");
console.log("Soma função:",somaExemplo);
mediaProcedimento(5,6);

mediaProcedimento(4,9);

mediaProcedimento(6,8);