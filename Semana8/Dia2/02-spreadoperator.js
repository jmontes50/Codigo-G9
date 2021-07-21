let frutas = ["Sandía","Chrimoya","Kiwi","Naranja"]

//spread = esparcir
//para crear un nuevo arreglo con el contenido de otro
//como hacemos spread -> ...referencia
let frutasTmp = [...frutas, "Uva","Mandarina","Mango"]

console.log(frutasTmp)

let verduras = ["Lechuga","Col China","Zanahoria","Jolantao"]

let carnes = ["Pollo", "Cordero", "Pato", "Cuy", "Res"]

let comida = [...verduras, ...carnes]

console.log(comida)

let Pikachu = {
    tipo:"Electrico",
    fuerza:40,
    vida:100,
    edad:15,
    ataque:"Cabezaso"    
}

let Pikachu2 = Pikachu

Pikachu2.vida = 50

//cuando hacemos un spread operator, copiamos las propiedad y valores del objeto original, pero al hacerlo podemos cambiar propiedades o agregar más propiedades
let Pikachu3 = {...Pikachu, fuerza:200, color:"Mostaza"}

Pikachu3.vida = 80

console.log("pikachu3",Pikachu3)

console.log("pikachu original",Pikachu)

//

let operacion = (a, b, ...rest) => {
    console.log("rest",rest)
    console.log(a + b)
}

operacion(10, 50, 100, 45, 2, 7)

let {fuerza, vida, ...rest} = Pikachu

let pikachu4 = {
    // fuerza:fuerza,
    // vida:vida,
    fuerza,
    vida
}

console.log(pikachu4)

console.log(rest) //va hacer referencia a las propiedades sobrantes