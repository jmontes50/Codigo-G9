let texto = "codigo";

console.log(texto);

let texto2 = new String("javascript");
//un string no es más que una cadena de texto
console.log(texto2)

//toUpperCase()
//transforma un texto a mayúsculas
console.log(texto.toUpperCase())

console.log(texto2.toUpperCase())

//toLowerCase()
//transformar un texto a minúsculas
let nombre = "KELY"

console.log(nombre.toLowerCase())

//trim()
//Va a remover espacios en los extremos

// let apellidos = prompt("Ingresa tus apellidos");

// console.log(apellidos.trim().length);

let oracion = "tres tristes tigres comen trigo en un trigal";

// let buscarTexto = prompt("Ingrese la palabra buscada");

// let posicion = oracion.indexOf(buscarTexto)

// console.log(posicion);

//replace

let reemplazo = oracion.replace("tigres","gatos")

console.log(reemplazo)

//split
//convierte un string en un arreglo de palabras y para hacerlo tiene que recibir un "separador"
let arrOracion = oracion.split(" ")

console.log(arrOracion);

//join
//Join va a agrupar un arreglo de strings en un solo string, recibe de parámetro un carácter que sirva de separador
let stringOracion = arrOracion.join(" ")

console.log(stringOracion)

//slice
//pide como pará metros el inicio, y el final según las posicione sde mi cadena de texto
let monto = "S/ 100.00"

let extraido = monto.slice(3, 9)

console.log(extraido)