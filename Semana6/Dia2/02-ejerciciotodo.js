/**
 * 1. Obtener los objetos element del DOM y referenciarlos ✔(☞ﾟヮﾟ)☞
 * 1.1 Form y al UL✔
 * 2. Obtener el value del input y agregarlo a un arreglo✔
 * 
 * 3. Mostrar las tareas en el UL
 */

let formTarea = document.getElementById("formTarea")

let ulPendientes = document.getElementById("pendientes")

let ulCompletados = document.getElementById("completados")

let arregloPendientes = []

let arregloCompletado = []

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault()
  //para hacer referencia a in input que este dentro de un formulario
  //nombreVariableForm["name_input"].value
  // console.log(formTarea["tarea"].value)
  let nuevaTarea = formTarea["tarea"].value
  arregloPendientes.push(nuevaTarea)
  console.log(arregloPendientes)
  // formTarea["tarea"].value = "" //string vacio al value del input
  formTarea.reset() //esto aplica a todos los inputs dentro de formulario
  //Ejecutamos la función que muestra lo elementos
  dibujarPendientes()
})

let dibujarPendientes = () => {
 // limpiamos antes de dibujar
  ulPendientes.innerHTML = ""
  //item va a ser cada tarea que tenga en mi arregloPendientes
  arregloPendientes.forEach((item, i) => {
    //creo un elemento <li>
    let li = document.createElement("li")
    //le agrego el texto de item
    li.innerHTML = item
    ulPendientes.appendChild(li)

    //Manera - 1
    li.addEventListener("dblclick", () => {
      //remuevo unos elementos del arreglo
      arregloCompletado.push(arregloPendientes[i])
      arregloPendientes.splice(i, 1) //elimino un elemento
      dibujarPendientes() //vuelvo a dibujar
      dibujarCompletados()
      console.log(arregloCompletado)
    })

    // Manera - 2 - bug al quedarse 1 solo elemento
    // li.addEventListener("dblclick", function() {
    //   //remuevo unos elementos del arreglo
    //   console.log(i)
    //   arregloPendientes.splice(i, 1)
    //   //remuevo del navegador, el mismo elemento
    //   ulPendientes.removeChild(this)
    //   console.log(arregloPendientes)
    // })
  })
  // let li = document.createElement("li")
  // li.innerHTML = arregloPendientes[arregloPendientes.length - 1]//ultimo elemento
  // ulPendientes.appendChild(li)
}

let dibujarCompletados = () => {
  ulCompletados.innerHTML = ""
  arregloCompletado.forEach((item) => {
    let li = document.createElement("li")
    li.innerHTML = item
    ulCompletados.appendChild(li)
  })
}