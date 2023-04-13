/* A let é semelhante ao var pois podemos alterar os valores.
   A const é uma forma de declarar constantes.
   O grande diferencial é o escopo de blocos, não temos mais variáveis sendo 'vazadas' para outros escopos por causa do mesmo nome;
*/

var x = 10
var y = 15

if( y> 10) {
   var x = 5
   console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
   let a = 5
   console.log(a)
}

let i = 100



for(let i = 0; i < 5; i++) {
   console.log(i)
}

console.log(i)


const name = "Olimpio"

function logName(){
   const name = "Eduardo"
   console.log(name)
}


logName()

console.log(name)