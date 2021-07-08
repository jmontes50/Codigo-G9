let nombre = prompt("Ingrese su nombre")

//localStorage.setItem("nombre","valor de lo que guardemos")
localStorage.setItem("miNombre", nombre)

setTimeout(() => {
  //localStorage.getItem("nombre con el que guardamos")
  let obtenido = localStorage.getItem("miNombre")
  alert(obtenido)
}, 4000)

setTimeout(() => {
  localStorage.removeItem("miNombre")
}, 8000)

localStorage.setItem("ahorros", 5000)

let misAhorros = localStorage.getItem("ahorros")

//el LocalStorage solamente guarda texto/string
console.log(typeof misAhorros)

let objTaza = {
  precio:30,
  tamanio:"mediano",
  color:"blanco",
  material:"ceramica"
}
// console.log(objTaza)

//JSON.stringify(lo_que_deseemos_convertir_a_texto)
//pero manteniendo su estructura de JS
let objAJson = JSON.stringify(objTaza)
// console.log(objAJson)

localStorage.setItem("objeto", objAJson)


setTimeout(() => {
  let JsonObtenido = localStorage.getItem("objeto")
  //JSON.parse hace lo contrario que stringify, convierte un JSON a un obj de JS
  let JsonConvertido = JSON.parse(JsonObtenido)
  console.log(JsonConvertido)
}, 3000)