/**
 * Ejercicio2
 * Iterando/Recorriendo el arreglo peliculas, obtener cada pelicula y crear una tabla con las siguientes columnas ID, Nombre, Año ,Idioma
 * 
 * Extra añadir otra columna antes que las mencionadas que muestre el Nro Orden (1,2,3,4,5,...)
 */

//1. Obtengan el elemento
//2. creen los o el elemento(s) necesario para la tabla columnas y demás
//3. muestren el contenido en el HTML

let divContenido = document.getElementById("contenido")

let tabla = document.createElement("table")

let contTabla = 
`<tr>
  <th>Nº</th>
  <th>ID</th>
  <th>Nombre</th>
  <th>Año</th>
  <th>Idioma</th>
</tr>`

peliculas.forEach((peli, indice) => {
  contTabla = contTabla + 
  `<tr>
    <td>${indice + 1}</td>
    <td>${peli.id}</td>
    <td>${peli.title}</td>
    <td>${peli.release_date.slice(0,4)}</td>
    <td>${peli.original_language}</td>
  </tr>`
})

tabla.innerHTML = contTabla;

divContenido.appendChild(tabla)