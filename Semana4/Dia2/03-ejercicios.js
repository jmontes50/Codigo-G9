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

// let cantPlatos = +prompt("Cuantos asistentes/comenzales tendrá el evento?")

// let precioFinal = 0;

// if(cantPlatos > 300){
//   precioFinal = cantPlatos * 75;
//   console.log(`El precio sera de: ${precioFinal}`)
// }else if(cantPlatos < 300 && cantPlatos >= 200){
//   precioFinal = cantPlatos * 85;
//   console.log(`El precio sera de: ${precioFinal}`)
// }else if(cantPlatos < 200 && cantPlatos >= 100){
//   precioFinal = cantPlatos * 88;
//   console.log(`El precio sera de: ${precioFinal}`)
// }else{
//   precioFinal = cantPlatos * 90;
//   console.log(`El precio sera de: ${precioFinal}`)
// }

//Ejemplo If anidados
// let nro1 = 45;
// let nro2 = 10;
// let nro3 = 90;

// //Necesitamos saber cual de estos 03 es el número mayor
// //if anidados
// if(nro1 > nro2){
//     if(nro1 > nro3){
//       console.log("el numero mayor es nro1")
//     }else{
//       console.log("el numero mayor es nro3")
//     }
// }else{
//   if(nro2 > nro3){
//     console.log("el numero mayor es nro2")
//   }else{
//     console.log("el numero mayor es nro3")
//   }
// }

/**
 * Un supermercado compra uva para vender
 * el kilo de uva lo compra a 5 soles
 * para venderla la divide en 02 tamaños 1 y 2
 * pero tambien la divide en 02 tipos, tipo A y B
 * Considerando:
 * Si es de tipo A pero de tamaño 1 se le adicionara 0.20 a su precio de venta
 * Si es de tipo A pero de tamaño 2 se le adicionara 0.30 a su precio de venta
 * Si es de tipo B pero de tamaño 1 se le adicionara 0.35 a su precio de venta
 * Si es de tipo B pero de tamaño 2 se le adicionara 0.50 a su precio de venta
 * calcule el precio de venta considerando el tipo, el tamaño y la cantidad de kilos
 * Intenten utilizar if anidados
 */

 let tipoUva = "B";
 let tamano = 1;
 let precioUva = 5;
 let cantKilos = 100;
 
 if(tipoUva == "A"){
     if(tamano == 1){
         precioUva=precioUva+0.20;
         console.log(cantKilos*precioUva);
     }else{
         precioUva=precioUva+0.30;
         console.log(cantKilos*precioUva);
     }
 }else{
     // aca asumo que ya es de tipo B 
     if(tamano==1){
         precioUva=precioUva+0.35;
         console.log(cantKilos*precioUva);
     }else{
         precioUva=precioUva+0.50;
         console.log(cantKilos*precioUva);
     }
 }