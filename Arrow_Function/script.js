/* A arrow function é um recurso para criar funções de forma mais simples, mas ela não funciona exatamente como uma function em todos os aspectos.
O this da arrow function é relacionado ao elemento pai de quem está a executando.
*/

const sum = function sum(a, b){
   return a + b
}

const arrowSum = (a, b) => a + b

   
console.log(sum(5, 5));

console.log(arrowSum(5, 5));

const greeting = (name) => {
   if(name){
      return `Olá ${name}!`
   } else {
      return 'Olá'
   }
}

console.log(greeting('Eduardo'));

console.log(greeting(0));

const testeArrow = () => console.log("testou");

testeArrow();

const user = {
   name: "Eduardo",
   sayUserName() {
      var self = this
      setTimeout(function(){
         console.log(self)
         console.log("Username: " + this.name)
      }, 500)
   },
   sayUserNameArrow(){
      setTimeout(() => {
         console.log(this)
         console.log('Username: ' + this.name)
      }, 700)
   }
}

user.sayUserName();
user.sayUserNameArrow();