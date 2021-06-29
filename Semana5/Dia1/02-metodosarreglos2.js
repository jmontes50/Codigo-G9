// let nombres = ["Juan","Maria","Diana","Gaby","Jacky","Diego","Marcos","Danny"]

//la funcion que este dentro del forEach
//va a recibir item, indice, arreglocompleto

// nombres.forEach(function(nom, i, arreglo){
//   console.log(`${i} - ${nom} - ${arreglo}`)
// })

//MAP
//estamos transformando los elementos de un arreglo pero los estamos retornando a otra variable, esa otra variable almacena los elementos transformados
// let numeros = [100,200,500,90,800]

// let cuenta = numeros.map((monto,indice,array) => {
//   return `Cuenta ${indice} - ${monto + 1.05}`;
// })

// console.log(cuenta)

//FILTER
// let peliculasBuenas = peliculas.filter((peli) => {
//   return peli.vote_average > 5
// })

// console.table(peliculasBuenas)

// let peliculasBuenardas = peliculas.map((peli) => {
//   if(peli.vote_average > 5){
//     return peli.title
//   }
// })

// console.table(peliculasBuenardas)



//IndexOf
//Busca un elemento en mi arreglo y si existe me retorna su posición, en caso de no existir me devuelve un -1

// let position = nombres.indexOf("Paolo")

// console.log(position)

//splice
//pide dos parámetros: posicion y cantidad de elementos
// nombres.splice(6, 1)

// console.log(nombres)

// let notas = [14,7,17,9,20,11,13,16]
// //cuidado con eliminar con splice y un for
// for(let i = 0; i < notas.length; i++){
//   if(notas[i] < 12){
//     notas.splice(i, 1)
//   }
// }

// console.log(notas)

// let nombres = ["Juan","Maria","Diana","Gaby","Jacky","Diego","Marcos","Danny"]

// let convertido = nombres.toString()

// console.log(convertido)

let texto = new String("Hola")
console.log(texto)

//cadenas de texto

console.log(texto.length)

console.log(texto[1])