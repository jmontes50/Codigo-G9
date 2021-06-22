// alert("Hola Mundo!");

let nombre = prompt("Ingresa tu nombre");

console.log(nombre);

//todo lo que capture prompt, lo hará como texto(string)
// let edad = prompt("Ingresa tu edad");

//parseInt, convierte un número en formato de texto a un tipo number
// console.log(parseFloat(edad))

let edad = +prompt("Ingresa tu edad");

console.log(edad)

let laQuieres = confirm("Bro, La quieres?");

console.log(laQuieres);