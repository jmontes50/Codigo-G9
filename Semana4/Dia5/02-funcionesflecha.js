//parámetros por defecto

function restar(num1 = 100, num2 = 20){
  return num1 - num2
}

console.log(restar(10, 2))

console.log(restar())

console.log(restar(50, 10))

function saludar(texto = "Hola!"){
  console.log(texto)
}

saludar()

saludar("Buenas Tardes")

//Funciones Anónimas

//IMPORTANTE
//Nosotros, podemos asignar a una variable casi cualquier cosa

//ESTO ES = QUE: function division(num1,num2)...
let division = function(num1, num2){
  return num1 / num2
}

console.log(division(1000, 4));

//cosa curiosa para ejecutar codigo en X tiempo

// setTimeout(function(){
//   console.log("BOMBA!")
// }, 3000)

//Funciones Flecha
// let despedirse = (texto) => {
//   return `Adiós, ${texto}`
// }

//Si es solo UN argumento no necesito los parentesis en la parte que recibe los argumentos
// let despedirse = texto => {
//   return `Adiós, ${texto}`
// }

//Si es algo muy simple y no tengo varias lineas
//puedo redurcirla a una sola linea, lo que vaya después de la flecha automaticamente se sobreentiende que se retorna
let despedirse = texto => `Adiós, ${texto}`

console.log(despedirse("No eres tú, soy yo"));