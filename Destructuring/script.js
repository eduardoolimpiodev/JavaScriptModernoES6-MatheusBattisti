/* 
O destructuring é um recurso que pode ser reutilizado em arrays e objetos.
A idéia é transformar os items de um desses dados em variáveis.
Simplificando a declaração de n variáveis para apenas 1 linha.
*/

const fruits = ['Maça', 'Laranja', 'Mamão']

const [f1, f2, f3] = fruits

console.log(f1);
console.log(f2);
console.log(f3);

const productDetails = {
   name: "Mouse",
   price: 39.99,
   category: "Periféricos",
   color: "black"
}

const {
   name: productName,
   price,
   category: productCategory,
   color
} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color}`)