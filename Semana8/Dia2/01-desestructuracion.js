let arreglo = ["capibara","pinguino","alce","cocodrilo"]

let item0 = arreglo[0]
//variables en c/ linea por c/item dentro de arreglo
console.log(item0)

let [primerItem, segundoItem, tercerItem, cuartoItem] = arreglo

console.log(primerItem)
console.log(segundoItem)
console.log(tercerItem)
console.log(cuartoItem)

let objVehiculo = {
    marca:"Tesla",
    modelo:"Model X",
    tipo:"Eléctrico",
    anio:2021,
    colores:["Rojo","Negro"],
    aireacondicionado:true,
    encender: function(){
        console.log("run run")
    }
}

// console.log(objVehiculo.modelo)
// console.log(objVehiculo.colores[1])

//tengo que saber de antemano que propiedades tiene el objeto que voy a desestructurar
let {modelo, anio, colores, encender, tipo, marca} = objVehiculo

console.log(tipo)
console.log(colores)
encender()
console.log(marca)

//Buena práctica
let verificarVariante = (edad, nombre, delito) => {
    console.log(edad)
    console.log(nombre)
    console.log(delito)
}

verificarVariante("Loki",100,"Ser bueno")

//let validarSueldo = (objSueldo) => {
//  objSueldo.bonificaciones
//}
let validarSueldo = ({base, bonifaciones}) => {
    console.log(bonifaciones)
}

let objSueldo = {
    base:900,
    bonifaciones:400,
    vacas:600
}

validarSueldo(objSueldo)

let alumnos = [
    {
        nombre:"Juan",
        edad:15
    },
    {
        nombre:"Eduardo",
        edad:16
    },
    {
        nombre:"Ana",
        edad:16
    },
]

//array.forEach((item, i, arr) => {})
alumnos.forEach(({nombre, edad}) => {
    console.log(nombre)
    console.log(edad)
})

let album = {
    nombre:"Random Access Memories",
    discografica:{
        nombre_discografica:"Columbia",
        empresa:"Sony Records"
    },
    canciones:[
        {
            cancion:"Instant Crush",
            autores:["Thomas","Julian"],
            duracion:5.37
        },
        {
            cancion:"Lose Yourself to Dance",
            autores:["Thomas","Pharrel"],
            duracion:5.53
        },
    ]
}

let {
        nombre,
        discografica : {
            nombre_discografica,
            empresa
        },
        canciones:[
            primeraCancion,
            segundaCancion
        ]
    } = album

console.log(empresa)
console.log(nombre_discografica)
console.log(primeraCancion)
// console.log(cancion)

// let {discografica:{empresa}} = album

// console.log(empresa)