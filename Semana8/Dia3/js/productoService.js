//Este archivo nos va a servir para manejar las peticiones dentro de nuestra aplicación.
const URL = "https://60f60ddc18254c00176e0100.mockapi.io/productos"

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        //el codigo asíncrono
        fetch(URL)
        .then((respuesta) => {
            return respuesta.json() //tengo la rpta con el status
        })
        .then((productosObtenidos) => {
            resolve(productosObtenidos) //tengo la data ya en JS
        })
        .catch(error => reject(error)) //en caso de error
    })
}

export {
    obtenerProductos
}