// const traerData = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Datos Obtenidos")
//         reject(""Error al obtener Data"")
//     })
// }

const traerData = async () => {
    return "Datos Obtenidos" //resolve
    // throw "Error al obtener Data" //reject
}

// traerData()
// .then((rpta) => {
//     console.log(rpta)
// })
// .catch((err) => {
//     console.error(err)
// })

//Para utilizar await tengo que utilizarlo dentro de un bloque que sea async
const usarData = async () => {
    try { //intenta ejecutar este bloque de código
        //equivalente al .then()
        let rpta = await traerData() //Wait Chepi
        console.log(rpta)
    } catch (err) { //Si hay errores captura ese error
        console.error(err)
    }
}
usarData()