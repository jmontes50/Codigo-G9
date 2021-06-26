let persona = {
  //propiedad:valor,
  nombre:"Juan",
  apellidos:"Perez Mendoza",
  edad:25,
  conduce:true,
  hobbies:["Dotero","Guitarra","Cocinar"],
  saludar:function(texto){
    console.log(texto)
    //esto funciona un poco mejor
  },
  despedirse: (despedida) => {
    console.log(despedida)
  }
}

persona.nombre = "Juan José"
persona.edad = 26
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.hobbies[1])
persona.saludar("Hola!!!!!")
persona.despedirse("Bye!")

//

let albumMusica = {
  nombre:"Voicenotes",
  artista:"Charlie Puth",
  discografica:"Atlantic Records",
  anio:2018,
  canciones:[
    {
      titulo:"The Way I am",
      duracion:3.06,
      escritores:['Charlie Puth','Jacob Kasher']
    },
    {
      titulo:"Attention",
      duracion:3.31,
      escritores:['Charlie Puth','Jacob Kasher'],
    }
  ]
}

console.log(albumMusica.canciones[1].escritores[0])