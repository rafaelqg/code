class Product{
    #description="";
    type="";
    constructor(){
       
    }

    getDescription(){
        return this.#description;
    }

    setDescritpion(description){
        this.#description=description;
    }

}

let product= new Product();
//product.#description="A";
product.type="Equipament";
product.setDescritpion("Silver");
console.log(product.getDescription());
console.log(product);
