const RECTANGLE_DIMENSIONS = {
    SMALL:[10,20],
    MEDIUM:[20, 40],
    LARGE: [40, 80],
};

class Rectangle{
    width=0;
    height=0;
    constructor(dimensions){
        this.width=dimensions[0];
        this.height=dimensions[1];
    }
    area(){
        return this.width*this.height;
    }
}

let r1= new Rectangle(RECTANGLE_DIMENSIONS.SMALL);
let r2= new Rectangle(RECTANGLE_DIMENSIONS.MEDIUM);
let r3= new Rectangle(RECTANGLE_DIMENSIONS.LARGE);
console.log(r1,r1.area());
console.log(r2,r2.area());
console.log(r3,r3.area());
