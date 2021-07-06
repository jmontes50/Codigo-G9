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
  console.log(miInput.value)
})

divContenido.appendChild(boton)