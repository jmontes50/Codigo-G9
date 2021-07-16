var manzana = "apple"

var manzana = "Manzana Peruanita"

console.log(manzana)

//var casi no tiene limitaciones de ambito
//lo podemos declarar dentro de un for, un if, while etc.
//Pero va a tener un ámbito/scope global
for(var i = 0; i < 3; i++){
    console.log(i)
}

console.log(`iterador: ${i}`)

//El único scope que respeta var es dentro de una función
function saludo(){
    var texto = "Hola!"
}

// console.log(texto)

//puedo invocar y modificar let siempre y cuando este dentro del ámbito/scope en el que este declarado
let patata = "papa"

if(true){
    let numero = 10;
    console.log(numero)
}

// console.log(numero)

const Pi = 3.1415

// Pi = 2

console.log(Pi * 3)

if(true){
    const elAmorDeElla = true
}

// console.log(elAmorDeElla)

const horasDia = [1,2,3]

horasDia.push(4)

console.log(horasDia)

const persona = {
    edad:25,
    cumple:function(){
        this.edad = this.edad + 1
    }
}

console.log(persona)

persona.cumple()

persona.nombre = "Jaime"

console.log(persona)

const despedirse = () => {
    console.log("Bye!")
}

despedirse() 