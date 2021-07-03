//document es un objeto que me va a permitir modificar el DOM
//EL DOM es una serie de nodos (objetos) creados al momento de interpretar el HTML, cada nodo seria una etiqueta HTML

//document.getElementById("id_elemento")
let titulo = document.getElementById("titulo")

console.log(titulo)

//innerHTML, que es una prop, que contiene el HTML dentro de un elemento
titulo.innerHTML = "<i>Nuevo Título de mi App</i>"

//kebab-case -> background-color
//camelCase -> backgroundColor

titulo.style.color = "rebeccapurple"
titulo.style.backgroundColor = "lime"
titulo.style.padding = "10px"

let listaItems = document.getElementsByClassName("lista_item")

console.log(listaItems)

let arregloItems = Array.from(listaItems)

console.log(arregloItems)

arregloItems.forEach((item) => {
  item.style.fontFamily = "Arial"
  item.style.fontWeight = "bold"
})

let cajitas = document.querySelectorAll(".cajita")

console.log(cajitas)

cajitas.forEach((caja) => {
  caja.innerHTML = "Contenido Caja"
  //añadir una clase al elemento
  caja.style.width = "200px"
  caja.style.height = "200px"
  caja.classList.add("resaltado")
  caja.classList.add("redondeado")

  console.log(caja.classList)
})

let miParrafo = document.querySelector("#miParrafo")

console.log(miParrafo)

miParrafo.classList.add("resaltado")

// setTimeout(()=>{
//   miParrafo.classList.remove("resaltado")
// }, 4000)

//setInterval se ejecuta CADA X tiempo
setInterval(() => {
  //toggle si encuentra algo lo quita y si no lo encuentra lo agrega
  miParrafo.classList.toggle("resaltado")
}, 2000)

//setInterval(una funcion, tiempo)
//cada x tiempo ejecutará la función
// setInterval(() => {
//   console.log("segundo!")
// }, 1000)

let divContenido = document.getElementById("contenido")

divContenido.innerHTML = "<p id='p1'>párrafo desde JS</p>" //si quiero modificarlo voy a tener que asegurarme que exista antes

let parrafo1 = document.getElementById("p1")

console.log("parrafo1",parrafo1)

//document.createElement("etiqueta")
//crea un objeto element (elementoHTML) de forma nativa
let parrafo2 = document.createElement("p")
parrafo2.innerHTML = "Texto del párrafo 2"

//appendChild hace que un elemento se añada como hijo de otro Elemento 
divContenido.appendChild(parrafo2)

//1 creo el elemento
let imagen = document.createElement("img")
//2 configuro atributos de ser necesarios
//element.setAttribute("nombre_del_atributo", "valor del atributo")
let url = "https://picsum.photos/200"
imagen.setAttribute("src", url)
imagen.setAttribute("alt","fotooooooo")
//3 lo agrego en alguna parte del DOM, como hijo de otro elemento
divContenido.appendChild(imagen)

let seleccion = ["Lapadula","Gallese","Carrillo","Cuevita","Ormeño","Yotún","Tapia","Pizarro","Flores","Ramos","Corzo"]

let lista = document.createElement("ul")

let htmlitems = "";

seleccion.forEach((jugador) => {
  htmlitems = htmlitems + `<li>${jugador}</li>`
})

// console.log(typeof htmlitems)
lista.innerHTML = htmlitems

divContenido.appendChild(lista)