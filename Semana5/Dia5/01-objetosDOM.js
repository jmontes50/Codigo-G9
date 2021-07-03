//Todo lo que hemos estado utilizando sale de window
window.console.log("Hola")

window.setTimeout(() => {
  console.log("Pum!")
}, 2000)

console.log(typeof window)

console.log(this)

//Window va a tener múltiples propiedades y objetos que me permiten hacer diferentes tareas u obtener información
//Da igual si invocamos a window, porque puedo llamar directamente a sus propiedades
navigator.geolocation.getCurrentPosition((infoUbicacion) => {
  console.log(infoUbicacion)
})

console.log(`info de la url ${location}`)

console.log(`info del navegador`, navigator.userAgent)

//innerWidth e innerHeight, estarian dandome el tamaño de la parte visible donde van los elementos HTML
console.log(`Ancho navegador ${innerWidth}`)

console.log(`Alto navegador ${innerHeight}`)

//Todo es un objeto, incluso el documento HTML
console.log(typeof document)

let titulo = document.querySelector("h1")

console.log(titulo)