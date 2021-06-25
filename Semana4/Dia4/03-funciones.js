
function suma(num1, num2){
  //puedo poner todo el codigo que desee
  //todo lo que yo declare dentro de mi función se queda dentro de mi función
  console.log(num1)
  let resultado = num1 + num2;
  return resultado
}

let sumatoria = suma(10, 20)

//Hoisting, tanto las referencias a variables como funciones van arribita gracias a esta caracteristica

console.log(sumatoria)

let resultado = "result"
console.log(resultado)
//el ambito aplica para todo bloque de codigo de for while do-while function
for(let i = 0; i < 5; i++){
  console.log(i)
}

console.log('i => ', i)