let miBoton = document.getElementById("boton");
let divContenido = document.getElementById("contenido")

//element.addEventListener("evento",function)
miBoton.addEventListener("click", () => {
  //código a ejecutar cuando le demos click al botón!
  alert("Me has hecho click!!!!")
})

let caja = document.createElement("div")

caja.style.width = "400px"
caja.style.height = "400px"
caja.style.borderColor = "black"
caja.style.borderWidth = "2px"
caja.style.borderStyle = "solid"
caja.style.backgroundColor = "slateblue"

divContenido.appendChild(caja)

//mouseover, cuando al mouse pasa por encima del elemento
caja.addEventListener("mouseover", () => {
  console.log("Paso por encima")
})

let libros = [
  "La Sombra de John Katzenbach!",
  "El tunel",
  "el vizconde de Bragelone",
  "La historia de la corrupción en el Perú",
  "Fortaleza Digital",
  "La Sombra",
  "Madre, Máximo Gorki",
  "los 12 apóstoles de la economía peruana",
  "El espía del inca",
  "El hobbit",
  "el fin de los tiempos",
  "El principito",
  "Un mundo para Julius",
  "Tokio Blues",
  "la chica invisible",
  "blue jeans",
  "el diario de ana frank"
]

libros.forEach((book) => {
  let nuevoParrafo = document.createElement("p")
  nuevoParrafo.innerHTML = book;
  divContenido.appendChild(nuevoParrafo)

  //podemos agregar un listener directamente en el forEach
  nuevoParrafo.addEventListener("dblclick",() => {
    alert(`Has hecho click en ${book}`)
  })
})