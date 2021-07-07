let nombre = prompt("Ingrese su nombre")

//localStorage.setItem("nombre","valor de lo que guardemos")
localStorage.setItem("miNombre", nombre)

setTimeout(() => {
  //localStorage.getItem("nombre con el que guardamos")
  let obtenido = localStorage.getItem("miNombre")
  alert(obtenido)
}, 4000)