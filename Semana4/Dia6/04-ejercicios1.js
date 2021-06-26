//Ejemplo1
//Crear un arreglo de objetos, donde cada objeto represente a una pelicula con los siguientes campos:
//nombrePelicula:string, anio:number, director:string, genero:string

let peliculas = [
  {
    nombrePelicula:"Blade Runner",
    anio:1982,
    director:"Ridley Scott",
    genero:"Ciencia Ficción"
  },
  {
    nombrePelicula:"Parasite",
    anio:2019,
    director:"Bong Joon-ho",
    genero:"Drama"
  },
  {
    nombrePelicula:"El Padrino",
    anio:1972,
    director:"Francis Ford Coppola",
    genero:"Drama"
  }
]

//Ejercicio 1:
//Crear un arreglo de series de TV, donde cada serie sera un objeto con los siguientes campo
/**
 * nombre:String,
 * descripcion:String,
 * anio:number,
 * finalizada:boolean,
 * personajes:Array de nombres
 * 
 * 5 items en el Array
 */

//Ejemplo 2:
/**
 * Juntar propiedades como el nombre, director, anio y genero del arreglo de peliculas para mostrarlas todas juntas ej.
 */

for(let i = 0; i < peliculas.length; i++){
  console.log(`La pelicula '${peliculas[i].nombrePelicula}' del año ${peliculas[i].anio} del director ${peliculas[i].director} es del género ${peliculas[i].genero}`)
}
// for(let i = 0; i < peliculas.length; i++){
//   console.log(`La película ${peliculas[i].nombrePelicula}`)
// }


//Ejercicio 2
/**
 * Listar las series del arreglo de series creado, utilizando las propiedades cada item, para crear una sinopsis que resuma la serie
 */

// console.table(peliculas)

// let loggued = false;

// //si es verdadero no lo muestra
// //si es falso me muestra un mensaje de error
// console.assert(loggued, "No esta Logueado")

let arrJuegos = [
  {
    nombre:"Halo",
    precio:35
  },
  {
    nombre:"Outer Wilds",
    precio:24
  },
  {
    nombre:"Civilization V",
    precio:90
  },
  {
    nombre:"Stardew Valley",
    precio:30
  },
  {
    nombre:"The Witcher 3",
    precio:40
  },
  {
    nombre:"Portal",
    precio:5
  }
]

let juegosComprables = []
//juegos comprables => [{nombre:'Halo',precio:35},{}]

//Ejercicio 2
/**
 * Preguntar por el presupuesto del usuario
 * presupuesto:number
 *  y recorrer el arreglo del juego, por cada juego que este dentro del presupuesto, agregarlo el juego al arreglo de juegos comprables.
 * 
 * tip: recuerden de que existe .push()
 */
// let presupuesto = +prompt("Ingrese cuanto tiene pensado gastar")

// for(let i = 0; i < arrJuegos.length; i++){
//   if(presupuesto >= arrJuegos[i].precio){
//     juegosComprables.push(arrJuegos[i])
//   }
// }

// console.table(juegosComprables)

//Ejercicio 3
//De manera similar al ejemplo anterior esta vez preguntar otra vez por el presupuesto del usuario, solamente que a diferencia del ejercicio anterior no mostrar las opciones viables si no preguntar si lo desea comprar y reducir el presupuesto hasta que no queden mas juegos o ya no haya mas presupuesto

let presupuesto = +prompt("cuando desea gastar???")

let juegosComprados = []

for(let i = 0; i < arrJuegos.length; i++){
  if(presupuesto < arrJuegos[i].precio){
    //hace que salte la iteración
    continue;
  }

  //estoy mostrando al usuario una ventanita que le de la info del juego y pregunte si lo compro
  let compra = confirm(`Deseas comprar ${arrJuegos[i].nombre}, cuesta S/ ${arrJuegos[i].precio}`);
  //evaluamos compra, recordemos que el confirm me devuelve, true o false
  if(compra === true){
    juegosComprados.push(arrJuegos[i])
    //presupuesto = presupuesto - arrJuegos[i].precio
    presupuesto -= arrJuegos[i].precio
  }
}

console.log(`A ud. le queda ${presupuesto}`)
console.table(juegosComprados)