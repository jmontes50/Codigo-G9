/**
 * Ejercicio 1
 * Realizar un programa que muestre los 10 primeros numeros pares (hasta el 20), no debe mostrar los numeros impares utilizar un while
 */

// let contador = 1;

// while (contador <= 20){
//   if(contador % 2 === 0){
//     console.log(`Contador es :${contador}`)
//   }
//   contador = contador + 1;
// }

/**
 * Ejercicio 2
 * Vamos a tener un arreglo de nuevos, dentro de este arreglo tendremos numeros positivos y negativos
 * Hallar:
 * La cantidad de números positivos
 * La cantidad de números negativos
 */

// let numeros = [25, 36, -50, 1, 45, -14, -87, 92, 124, -63]

// let cantPositivos = 0;
// let cantNegativos = 0;

// let contador = 0;

// // let arrNum = [10,20,30,40,50,60]

// // let posicion = 3

// // console.log(arrNum[posicion])

// while(contador < numeros.length){
//   if(numeros[contador] > 0){
//     cantPositivos = cantPositivos + 1;
//   }else{
//     cantNegativos = cantNegativos + 1
//   }
//   contador = contador + 1
// }

// console.log(`Los números positivos son: ${cantPositivos}`)
// console.log(`Los números negativos son: ${cantNegativos}`)

/**Ejercicio 3
 * Hacer un programa que pregunte por una Nota
 * ej, del 0 al 20
 * Dependiendo de lo que ud ingrese la consola mostrará APROBADO o DESAPROBADO
 * considerando que la nota minima aprobatoria es 12
 * Si el usuario (ud), escribe -1 debe dejar de preguntar
 */

//tips, utilicen prompt y do while

//Extra:dar el promedio de notas al final

// let suma = 0;
// let contador = 0;
// let nota;

// do{
//   nota = +prompt("Ingrese la nota");
//   if(nota >= 12){
//     console.log("APROBADO")
//   }else{
//     console.log("DESAPROBADO")
//   }
// }while (nota != -1)

let semaforo = true; //Deje de preguntar la aplicación
let suma = 0; //sumatoria de notas
let contador = 0; //cuantas notas estoy contando

do{
  let nota =+prompt("Cual es tu nota?")
  if(nota === -1){
    semaforo = false
  }else if(nota >= 12){
    console.log("APROBADO!")
    suma = suma + nota
    contador = contador + 1
  }else{
    console.log("DESAPROBADO")
    suma = suma + nota
    contador = contador + 1
  }
  //cada vez que yo evalue una nota esta se adicione a la sumatoria de notas
}while(semaforo === true)

console.log(`El promedio es: ${suma/contador}`)