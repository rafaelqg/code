//JSON - Java Script Object Notation
let meuCarro={
    cor:"preta",
    anoFabricacao:2000,
    valorIPVA: [780, 700,690, 675,660],
    acessorios:[]
};

let meuSegundoCarro={
    cor:"branca",
    anoFabricacao:2012,
    valorIPVA: [1000,950,930,910],
    acessorios:["ar condicionado","computador de bordo"],
}
console.log("Acessorios do carro A:", meuCarro.acessorios);
console.log("Acessorios do carro B:", meuSegundoCarro.acessorios);
/*
let frota=[meuCarro,meuSegundoCarro];
console.log("Minha frota é composta de",frota);

console.log(meuCarro, typeof meuCarro);
console.log("A minha cor é:", meuCarro.cor);
console.log("A minha cor é acesso por colchetes:", meuCarro["cor"]);
console.log("O meu ano de fabricação é:", meuCarro.anoFabricacao);
console.log("O histórico de IPVA é:", meuCarro.valorIPVA);
console.log("O valor do IPVA do último ano é:", meuCarro.valorIPVA [ meuCarro.valorIPVA.length - 1]);
*/
