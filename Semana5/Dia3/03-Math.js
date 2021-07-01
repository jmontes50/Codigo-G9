//Math
//Math es una clase estática
//Math solo va a proveer métodos para que nosotros utilicemos

//Que me va a permitir el método sqrt
//obtener una raíz cuadrada

let raizDe25 = Math.sqrt(25)

console.log(raizDe25)

let cambio = 15.9999999999

//Floor, redondea un número a enteros a su menor valor entero
console.log(Math.floor(cambio))

let vuelto = 0.2
//Ceil, redondea un número a enteros a su mayor valor entero
console.log(Math.ceil(vuelto))

let precio = 4.5
//round()
//redondea pero tomando el valor entero más cercano
console.log(Math.round(precio))

//random(), devuelve un numero aleatorio entre 0 y 1
let aleatorio = Math.random()

console.log("random",aleatorio)

let entre20y60 = Math.random() * (60 - 20) + 20

console.log(entre20y60)

let oferta = 19.59999999

console.log(oferta.toFixed(1))

//
let numero = 63464634.534643631

let redondeado = Math.round((numero + Number.EPSILON) * 100) / 100

console.log(redondeado)