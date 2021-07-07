let miInput = document.getElementById("miInput")
let divContenido = document.getElementById("contenido")

//keyup
//El addEventListener escucha el evento que le indiquemos, y nosotros podemos capturar ese evento en la función que esta como 2do parámetro de addEventListener
miInput.addEventListener("keyup", (evento) => {
  //evento.target representa al propio elemento de donde se esta disparando el evento
  // console.log("tecla presionada",evento.key)
  // console.log(evento.target.value)
})

let boton = document.createElement("button")
boton.innerHTML = "Mostrar Valor"

boton.addEventListener("click", () => {
  //podemos obtener el valor,contenido de un input gracias a la propiedad value
  console.log(miInput.value)
})

divContenido.appendChild(boton)


let goToGoogle = document.createElement("a")

goToGoogle.setAttribute("href", "http://google.com")
goToGoogle.innerHTML = "Llevame a Google"

divContenido.appendChild(goToGoogle)

//para detener un evento por defecto podemos utilizar el e.preventDefault(), detiene el comportamiento por defecto por ejemplo de un hipervinculo hacia otra URL
goToGoogle.addEventListener("click", (e) => {
  e.preventDefault()
})


let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (eventito) => {
  eventito.preventDefault()
})

