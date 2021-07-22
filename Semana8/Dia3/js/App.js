//to-do
//1. Obtener Datos 
//1.1 Esos datos están en la estructura que necesito?
//2. Convertir esos datos a HTML
//3. Agregarlos al DOM

import { obtenerProductos } from "./productoService.js"
import { imprimirProductos } from "./Interfaz.js"

const getProductos = () => {
    obtenerProductos()
    .then(productos => {
        // console.log(productos)
        imprimirProductos(productos)
    })
}
getProductos()