/* 
O filter é um método de array para filtrar dados, baseado em alguma condição que estabelecemos.
Isso nos dará um array com apenas os elementos que queremos.
*/

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
   if(n >= 3){
      return n
   }
})

console.log(highNumbers);

const users = [
   { name: 'Eduardo', available: true },
   { name: 'Maria', available: true },
   { name: 'Marcele', available: false },
   { name: 'Roberto', available: false },
 ]

 const availableUsers = users.filter((user) => user.available);
 const notaAailableUsers = users.filter((user) => !user.available);
 console.log(availableUsers);
 console.log(notaAailableUsers);