/* 
O Map é um método de array também, que percorre todos os elementos;
Quando utilizamos o map, estamos querendo modificar os dados do array.
*/

const products = [
   { name: 'Camisa', price: 10.99, category: 'Roupas'},
   { name: 'Chaleira', price: 49.99, category: 'Eletro'},
   { name: 'Fogão', price: 1000.99, category: 'Eletro'},
   { name: 'Calça Jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
   if(product.category === 'Roupas'){
      product.onSale = true;
   }
})

console.log(products);