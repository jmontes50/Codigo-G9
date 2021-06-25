let alumnos = ["Alex","Diana","Gaby","Jacky","Marco","Paloma","Danny"]

let notas = [15,17,20,20,14,18,14]

//Ejercicio1
//COn un for imprimir cada alumno con su respectiva nota, considerando que estan ordenados por la posición que tienen en sus arreglos.

//Ej. Alex tiene 15

// for(let i = 0; i < alumnos.length; i++){
//   console.log(`${alumnos[i]} tiene ${notas[i]} de Nota`)
// }

//Ejercicio 2
//Utilizando el mismo arreglo alumnos, hacer que el usuario ingrese un nombre y si lo encuentra debe mostrar la posición donde se encuentre el alumno, Si es que lo encuentra debe dejar de buscar. En caso de no encontrarlo, mostrar un mensaje que no se encontro

//Ejercicio 3
//Imprimir la sumatoria de los números que sean múltiplos de 3, entre 0 y 100

// let nombreBuscado = prompt("Ingrese el nombre a buscar")

//ej2
// for(let i = 0; i < alumnos.length; i++){
//   if(nombreBuscado === alumnos[i]){
//     console.log(`Se encontro a ${nombreBuscado} en la posición ${i}`);
//     break;
//   }else{
//     console.log("No hay :/")
//   }
// }

//ej3
// let sumatoria = 0;

// for(let i = 0; i <= 100; i++){
//   if(i % 3 === 0){
//     // sumatoria = sumatoria + i;
//     sumatoria += i
//   }
// }

// console.log(`La sumatoria de los múltiplos de 3 es: ${sumatoria}`)

// Ejercicio 4

// Pedir al usuario UN AÑO DE INICIO y UN AÑO FINAL ej (1492 y 1990) mostrar en la consola que años entre ese rango de años son bisiestos

//Si utilicen el ejemplo hicimos antes

// let anioInicio = +prompt("Indique un año inicial")

// let anioFinal = +prompt("Indique un año final")

// for(let i = anioInicio; i <= anioFinal; i++){
//   if((i % 4 == 0 && i %100 != 0) || i % 400 == 0){
//     console.log(`El año ${i} es bisiesto!`)
//   }
// }

//Ejercicio 5
/**
 * Una bodega quiere hacer un inventario, actualmente.tiene 03 tipos de productos: papitas, jabones y chocolates
 * queremos saber cuantos productos tiene en existencia
 */
/**t
 * Descomposición
 * Reglas: Manejamos 3 productos
 * Cada Producto tendrá su cantidad al final
 * Tendremos que preguntar producto por producto
 * -Que datos o variables deberiamos tener?
 * 1. variables para contar c/producto
 * 2. cantidad total de productos en general
 */

//Ud pregunten cada vez el tipo de producto que esten contando en ese momento

let cantProductos = +prompt("Cuantos productos contarás?");

let papitas = 0;
let chocolates = 0;
let jabones = 0;

for(let i = 1; i <= cantProductos; i++){
  let tipo = +prompt('Ingrese 1. Papitas, 2. Choco 3. Jabones');

  switch(tipo){
    case 1:
      papitas++;
      break;
    case 2:
      chocolates++;
      break;
    case 3:
      jabones++;
      break;
    default:
      alert('Ingresa bien >:o')
      i-- //reduzco el valor que tiene i para que no lo considere, porque esta mal
  }
}

console.log(`En total tenemos ${papitas} papitas, ${chocolates} chocolates, ${jabones} jabones`)