// comentário de linha
/*
1. Definição de variáveis e seus tipos
2. Saída de dados: impressão de variáveis no console.log
3. Operações lógicas e aritméticas
*/
//definição de variáveis
let numeroA=5;
let numeroB=7;
let meuArray=[1,2,4];
console.log(numeroA+numeroB, typeof(numeroA),meuArray);//impresão no console
//Entendendo tipagem dinamica
numeroA="5";
console.log(numeroA, typeof(numeroA));
numeroA=false;
console.log(numeroA, typeof(numeroA));
numeroA=20.5;
console.log(numeroA, typeof(numeroA));
console.log(meuArray, typeof(meuArray));
//Operações aritméticas
console.log("Soma", numeroA+numeroB);
console.log("subtração", numeroA-numeroB);
console.log("multiplicação", numeroA*numeroB);
console.log("divisão", numeroA/numeroB);
//Operações Lógicas
console.log("Igualdade", numeroA==numeroB);
console.log("Diferença", numeroA!=numeroB);
console.log("Maior que", numeroA>numeroB);
console.log("Menor que", numeroA<numeroB);
console.log("AND", true && false);
console.log("OR", false || true);





