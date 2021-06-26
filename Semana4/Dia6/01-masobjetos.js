let perrete = {
  nombre:"Backus",
  edad:15,
  color:"blanco",
  habitos:["escarbar","ladrar","dormir"],

  //método, simplemente es una función asociada a una propiedad de un objeto
  ladrar: function(){
    console.log("arf arf arf");
  }
}
perrete.ladrar()
perrete.color = "blanco con gris"
console.log(perrete.color)

//entonces no solamente vamos a poder referenciar y cambiar las propiedades de un objeto, también podemos agregar propiedades
perrete.tamanio = "pequeño"
console.log(perrete.tamanio)

delete perrete.edad //eliminar una propiedad

console.log(perrete.edad) //undefined

//--------------------------------------

let restaurante = {
  nombre:"La Nueva Palomino",
  platillos:[
    {
      id:1,
      nombrePlatillo:"Rocoto Relleno",
      precio:26
    },
    {
      id:2,
      nombrePlatillo:"Pepian de Cuy",
      precio:35
    },
    {
      id:3,
      nombrePlatillo:"Chupe de camarones",
      precio:40
    }
  ],
  
  mostrarPlatillos: function(){
    console.log(restaurante.platillos)
  }
}

// console.log(restaurante.platillos)

restaurante.mostrarPlatillos()