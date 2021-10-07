let i=200;
console.log("init",i);
//while
while(i<100){
    console.log("while", i);
    i=i+1;
}
//do-while
do{
    console.log("do-while",i);
    i=i+1;
}while(i<100);
//for
for(i=0; i<10 ;i++){ //inicialização (é executado somente 1 única vez) ; condicao logica (se verdadeiro continua); operacao pós iteração (normalmente incremento)
    console.log("for", i);
}