/* 
As classes são recursos fundamentais para programar com orientação a objetos.
Agora o JS tem este recurso omplementado, onde temos acesso a constructor, propriedades, métodos e mais.
Antes as classes eram baseadas em funções ( constructor functions).
*/

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola v", 20);
console.log(shirt.name)

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product("Tenis verde", 120);
console.log(tenis.productWithDiscount(20));
