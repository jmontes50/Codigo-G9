let arrJuegos = [
  {
    nombre:"Halo",
    precio:35
  },
  {
    nombre:"Outer Wilds",
    precio:24
  },
  {
    nombre:"Civilization V",
    precio:90
  },
  {
    nombre:"Stardew Valley",
    precio:30
  },
  {
    nombre:"The Witcher 3",
    precio:40
  },
  {
    nombre:"Portal",
    precio:5
  }
]
//1. pregunto el presupuesto
let presupuesto = +prompt("cuando desea gastar???")

let juegosComprados = []
//2. Filtro cuales podria comprar 
let revisarPresupuesto = () => {
  let juegosComprables = []

  for(let i = 0; i < arrJuegos.length; i++){
    if(presupuesto >= arrJuegos[i].precio){
      juegosComprables.push(arrJuegos[i])
    }
  }
  return juegosComprables
}

let agregarACarrito = (listaJuegos) => {
  for(let i = 0; i < listaJuegos.length; i++){
    if(presupuesto < listaJuegos[i].precio){
      console.log(`Se descarta ${listaJuegos[i].nombre}`)
      continue;
    }

    let compra = confirm(`Deseas comprar ${listaJuegos[i].nombre}, cuesta S/ ${listaJuegos[i].precio}`);
    if(compra === true){
      juegosComprados.push(listaJuegos[i])
      //presupuesto = presupuesto - listaJuegos[i].precio
      presupuesto -= listaJuegos[i].precio
    }
  }
}

let listaComprables = revisarPresupuesto() //me devuelve un arreglo
console.log('Con ese monto puedes acceder a estos Juegos')
console.table(listaComprables)
agregarACarrito(listaComprables)

console.table(juegosComprados)
console.log(`Tu vuelto es ${presupuesto}`)






// console.log(`A ud. le queda ${presupuesto}`)
// console.table(juegosComprados)