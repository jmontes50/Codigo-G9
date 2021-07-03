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