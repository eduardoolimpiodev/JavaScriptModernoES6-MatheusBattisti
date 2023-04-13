/* 
O Spread pode ser utilizado também em arrays e objetos.
Utilizamos para construir novos valores destes dados em outros arrays e objetos.
Ou seja, podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro, por exemplo.
*/

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1,...a2]

console.log(a3);


const a4 = [0,...a1, 4]
console.log(a4);

const carName = {name: "Gol"}
const carBrand = {brand: 'Vw'}
const otherInfos = {km:10000, price: 49000}

const car = {...carName, ...carName, ...otherInfos, wheels: 4}
console.log(car);
