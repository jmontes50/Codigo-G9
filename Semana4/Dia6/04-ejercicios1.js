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

//Ejercicio 2
/**
 * Listar las series del arreglo de series creado, utilizando las propiedades cada item, para crear una sinopsis que resuma la serie
 */

console.table(peliculas)

let loggued = false;

//si es verdadero no lo muestra
//si es falso me muestra un mensaje de error
console.assert(loggued, "No esta Logueado")