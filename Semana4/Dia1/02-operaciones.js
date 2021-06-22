let a = 100;
let b = 4;

let suma = a + b;
console.log("Suma", suma);

let resta = b - a;
console.log("Resta", resta);

let multiplicacion = a * b;
console.log("Multiplicar", multiplicacion);

let division = a / b;
console.log("División", division);

let residuo = 105 % 4;
console.log("Modulo", residuo);

//Concatenar

let nombre = "Osmar";

let saludo = "Hola soy ";

let edad = 30;

// las variables que sean simples
//sin tíldes, ni carácteres raros
//comiencen en una letra
let oracion = saludo + nombre + " y tengo " + edad;

console.log(oracion)

let cita = "\"La imaginación es más importante que el conocimiento\". \nAlbert Einstein";

console.log(cita);

console.log("11" + 1);//concatenando

console.log("11" - 1);//resta

let saludo2 = "Buen día ";

let ciudad = "Arequipa";

//${} significa que ahí adentro puedo usar JS
//template string
let oracion2 = `${saludo2} soy de ${ciudad}`;

console.log(oracion2);