/**
 * Ejercicio1
 * Una sastreria tiene una promoción, a todos los trajes que cuesten más que S/ 800 se
 * les aplicará un descuento del 15%, en caso de ser menor que S/ 800 solamente se les aplicará un descuento del 8%, cree el código necesario para preguntar al cliente cuanto es el precio original de su traje y según eso darle el precio final
 */

/**
 * 1. que datos necesito?✔
 * 2. como los obtengo?✔
 * 3. tengo que hacer algún cambio a esos datos, convertirlo a un número ✔
 * 4. hay que evaluar el número y segun eso restarle el porcentaje indicado
 * 5. para obtener el precio final puedo multiplicarlo por el porcentaje en decimales
 * ej. 0.95 = > 95%
 */

// let precioOriginal = +prompt("Ingrese el precio original de su traje")

// if(precioOriginal > 800){
//   console.log(`El precio final será: ${precioOriginal * 0.85}`)
// }else{
//   console.log(`El precio final será: ${precioOriginal * 0.92}`)
// }

/**
 * Ejercicio 2
 * Escriba una programa que responda a un usuario que quiere comprar un helado, a su helado le puede agregar toppings, añadidos
 * El helado solo cuesta: 5.00
 * El topping de oreo cuesta: 1.50
 * El topping de sublime cuesta: 2.50
 * El topping de chispitas cuesta: 0.50
 * El topping de aguaymanto cuesta: 4.00
 * El topping de ositos cuesta: 3.00
 * 
 * //Se tiene que elegir solo 01 topping.
 * //pregunte por opciones ej.: Ingrese 1 para elegir el topping oreo
 * El precio final con topping incluido
 */

// let topping = +prompt(`Ingrese Una de las siguientes opciones
//                        1 para El topping de oreo cuesta: 1.50
//                        2 para El topping de sublime cuesta: 2.50
//                        3 para El topping de chispitas cuesta: 0.50
//                        4 para El topping de aguaymanto cuesta: 4.00
//                       5 para El topping de ositos cuesta: 3.00`)
// let precioHelado = 5;

// if(topping === 1){
//   console.log(`El precio final del helado será ${precioHelado + 1.5}`)
// }else if(topping === 2){
//   console.log(`El precio final del helado será ${precioHelado + 2.5}`)
// }else if(topping === 3){
//   console.log(`El precio final del helado será ${precioHelado + 0.5}`)
// }else if(topping === 4){
//   console.log(`El precio final del helado será ${precioHelado + 4.0}`)
// }else if(topping === 5){
//   console.log(`El precio final del helado será ${precioHelado + 3.0}`)
// }else{
//   console.log("No ingreso una opcion válida")
// }

/**Ejercicio3
 * Un Catering ofrece sus servicios para eventos y tonos, el costo base de c/platillo es de S/ 90
 * Pero si el número de pèrsonas es mayor a 300 cobrará S/ 75, si es mayor a 200 pero menor a 300 sera S/ 85 y si es mayor a 100 pero menor a 200 cuesta S/88.
 * Cree un algoritmo que acepte la cantidad de personas/platillos y muestre el precio final.
 */

let cantPlatos = +prompt("Cuantos asistentes/comenzales tendrá el evento?")

let precioFinal = 0;

if(cantPlatos > 300){
  precioFinal = cantPlatos * 75;
  console.log(`El precio sera de: ${precioFinal}`)
}else if(cantPlatos < 300 && cantPlatos >= 200){
  precioFinal = cantPlatos * 85;
  console.log(`El precio sera de: ${precioFinal}`)
}else if(cantPlatos < 200 && cantPlatos >= 100){
  precioFinal = cantPlatos * 88;
  console.log(`El precio sera de: ${precioFinal}`)
}else{
  precioFinal = cantPlatos * 90;
  console.log(`El precio sera de: ${precioFinal}`)
}