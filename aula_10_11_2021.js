class Rectangle{
    width=0;
    height=0;
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}

let r1= new Rectangle(10,20);
let r2= new Rectangle(20,40);
let r3= new Rectangle(40,80);
console.log("R1 - largura:", r1.width);
console.log(r1,r1.area());
console.log(r2,r2.area());
console.log(r3,r3.area());


class Triangulo{
    base=0;
    altura=0;

    area(){
        return (this.base*this.altura)/2;
    }

}

let t1= new Triangulo();
t1.base=5;
t1.altura=10;
let area=t1.area();
console.log(typeof(t1), t1, area);

let t2= new Triangulo();
t2.base=15;
t2.altura=30;
area=t2.area();
console.log(typeof(t2), t2, area);
