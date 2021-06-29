let nombres = ["Juan","Maria","Diana","Gaby","Jacky","Diego","Marcos","Danny"]

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
let peliculasBuenas = peliculas.filter((peli) => {
  return peli.vote_average > 5
})

console.table(peliculasBuenas)