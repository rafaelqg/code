class Poligono{
    area(){

    }

    impremePoligono(){
        console.log("Imprime poligono:",this, this.area());
    }
}

class Quadrado extends Poligono{
    largura=0;
    altura=0;

    area(){
        return this.largura*this.altura;
    }
}

class Triangulo extends Poligono{
    largura=0;
    altura=0;

    area(){
        return (this.largura*this.altura)/2;
    }
}

let q1= new Quadrado();
q1.largura=10;
q1.altura=15;
q1.impremePoligono();


let t1= new Triangulo();
t1.largura=10;
t1.altura=15;
t1.impremePoligono();
