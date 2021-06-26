/**
 * Ejercicio1
 * Crear una función (puede ser clasica o flecha) que reciba 03 parámetros, nombre, edad y ciudad con esos parámetros debe retornar una presentación
 * Ej: Hola yo soy Juan tengo X años y vengo de X ciudad
 * utilizar el return para imprimirlo en la terminal
 */

let presentate = (nombre, edad, ciudad) => `Hola me llamo ${nombre} tengo ${edad} y soy de ${ciudad}`;

console.log(presentate('Osmar',30,"Arequipa"))

/**
 * Ejercicio 2

Desarrollar una función que reciba 01 arreglo de nombres Y 01 nombre, con esos datos buscar si el nombre recibido se encuentra dentro del arreglo y si se encuentra retornar la posición en que se encuentre, en caso de no encontrarlo retornar un -1 y mostrarlo en la consola
 */

let encontrar = (arreglo, nombre) => {
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] === nombre){
      return i;
    }
  }
  return -1;
}

let existe = encontrar(["Juan","Judith","Sandra"], "Judith")

console.log(`El nombre se encuentra en ${existe}`)

/**
 * ejercicio 3

Desarrollar una función llamada esPrimo, que reciba 01 número como parámetro, la función debe encontrar si ese número es primo, si es primo retornar un true, en caso de no serlo retornar un false.

tip: Es primo siempre y cuando el numero solo sea divisible entre si mismo y 1 sin dejar residuo.

 */

let esPrimo = (numero) => {
  if(numero === 1 || numero === 2 || numero === 3){
    return true
  }
  for(let i = 2; i < numero; i++){
    if (numero % i === 0){
      return false;
    }
  }
  return true;
}