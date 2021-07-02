//class <Nombre_Clase>
//el nombre de la clase debe iniciar en Mayúscula
//no lleva paréntesis solo de frente llaves
class Pokemon {
  //0. Definiremos que caracteristicas va a tener mi plano/plantilla 
  //se ponen tal cual, sin let ni var ni ná
  // Nombre;
  // Tipo;
  // Vida;
  // Poder;
  // Agilidad;
  // Nivel;
  //1. Constructor, toda clase va a tener un constructor, el constructor es un método
  //El constructor en una clase es lo Primero (Siempre) que se ejecuta y se ejecuta obligatoriamente
  constructor(nombre, tipo, vida, poder, agilidad, nivel){
    //aca adentro del construictor vamos a construir el objeto
    //this va a hacer referencia al objeto que en ese momento se está trabajando
    this.Nombre = nombre;
    this.Tipo = tipo;
    this.Vida = vida;
    this.Poder = poder;
    this.Agilidad = agilidad;
    this.Nivel = nivel
    console.log("Construyendo...")
  }

  aparecer(){
    console.log(`Un ${this.Nombre} salvaje apareció`)
  }
}

// let nombrePokemon = prompt("Nombre Pokemón")
//cuando creamos un nuevo Objeto a partir de una clase, estamos instanciando o creando una instancia
let ratonAmarillo = new Pokemon("Pikachu","Electrico",60 , 50, 80, 4);

let lechuguita = new Pokemon("Bulbasaur","vegetal", 70, 45, 50, 4)

console.log(ratonAmarillo)

console.log(lechuguita)

lechuguita.aparecer()

//funcion constructor
let personaConstructor = (nombre, edad) => {
  let objPersona = {
    Nombre:nombre,
    Edad:edad
  }

  return objPersona
}

let alumno = personaConstructor("Carlos",25)

console.log(alumno)