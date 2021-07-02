let gato = {
  nombre:"Garfield",
  edad:15,
  raza:"Siames",
  color:"Marron",
  peso:1,
  mostrarInfo:function(){
    //this hace referencia al objeto en el que este metido
    console.log(this)
  },
  mostrarNombre:() => {
    //this dentro de una función flechara hará refencia al objeto window
    console.log(this)
  }
}

// gato.mostrarInfo()
// gato.mostrarNombre()

class Animal {
  //a esto accederá el super
  Nombre;
  Edad;
  Familia;
  Tamanio;
  constructor(nombre,edad,familia,tamanio){
    this.Nombre = nombre
    this.Edad = edad
    this.Familia = familia
    this.Tamanio = tamanio
  }

  correr(velocidad){
    console.log(`${this.Nombre} puede correr a ${velocidad}`)
  }

  detener(){
    console.log(`${this.Nombre} se detuvo, esta alerta`)
  }
}

let panda = new Animal("Panda", 20, "Mamiferos", "Muy Grande")

console.log(panda)

//con extends lo que hago es heredar las propìedades de una clase que tiene mayor jerarquía
class Conejo extends Animal {
  //como salto es una propiedad que pertenece a conejo, la añado de forma normal
  //Tanto constructor como super son palabras reservadas
  constructor(nombre, edad, familia, tamanio, salto){
    //super me permite acceder al constructor de la clase Padre
    //no necesariamente tiene que ser el mismo nombre para los parámetros
    super(nombre, edad, familia, tamanio)

    this.Salto = salto
  }

  esconder(){
    console.log(`${this.Nombre} se oculta en un agujero ${this.Tamanio} con un salto de ${this.Salto} metro`)
  }

}

let bugs = new Conejo("Bugs Bunny", 5, "herviboros", "Chiquito", 1)

console.log(bugs)

bugs.correr(2)

bugs.esconder()