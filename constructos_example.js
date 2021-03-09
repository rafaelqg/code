class Product{
    #description="";
    type="";

   /*    constructor(description, type){
        this.#description=description;
        this.type=type;
    }
*/
 
    constructor(description="", type){
        this.#description=description;
        if(type != undefined){
            this.type=type;
        }
    }

    

    getDescription(){
        return this.#description;
    }

    setDescritpion(description){
        this.#description=description;
    }

    toString(){
        return this.getDescription() + `(${this.type})`;
    }

}

let product= new Product();
console.log(product.toString());
product.type="Equipament";
product.setDescritpion("Silver sword");
console.log(product.toString());

product= new Product("Iron Sheild");
console.log(product.toString());

product= new Product("Potion","Item");
console.log(product.toString());
