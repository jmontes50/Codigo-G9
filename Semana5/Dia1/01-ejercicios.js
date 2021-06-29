//Con un for mostremos el nombre de c/pelicula

// for(let i = 0; i < peliculas.length; i++){
//   console.log(peliculas[i].title)
// }

//Ejercicio 1
//Listar solamente las peliculas que tengan una puntuación (vote_average mayor a 5)

// for(let i = 0; i < peliculas.length; i++){
//   if(peliculas[i].vote_average > 5){
//     console.log(`Esta pelicula debe ser buena ${peliculas[i].title}`)
//   }
// }

//Ejemplo 1
//Función que me retorne las peliculas por idioma

// let peliculasPorIdioma = (idioma) => {
//   let peliculasSeleccionadas = []

//   for(let peli of peliculas){
//     if(peli.original_language === idioma){
//       peliculasSeleccionadas.push(peli.title)
//     }
//   }

//   return peliculasSeleccionadas;
// }

// console.table(peliculasPorIdioma("en"))

//Ejercicio2
/**Dado el nombre de un genero, imprimir todos los nombres de las peliculas que tengan ese genero.
 * 
 * Filtro por genero
 * 
 * //Van a necesitar un for para peliculas y otro for para generos.
 * Trabajen con genre_ids de peliculas y id de generos
*/

//Input => Genero ej. Horror
//Output => Peliculas de ese género

let mostrarPeliculasPorNombre = (nombreGenero) => {
  let generoEncontrado = 0; //id genero que estoy buscando
  let peliculasEncontradas = []
  //primero vamos a buscar el genero
  for(let genero of generos){
    if(genero.name === nombreGenero){
      generoEncontrado = genero.id
    }
  }

  for(let peli of peliculas){
    //Pero tengo que evaluar cada genero de genre_ids, ya que es un arreglo
    for(let idGenero of peli.genre_ids){
      if(idGenero === generoEncontrado){
        peliculasEncontradas.push(peli.title)
      }
    }
  }

  return peliculasEncontradas;
}

console.table(mostrarPeliculasPorNombre("Adventure"))