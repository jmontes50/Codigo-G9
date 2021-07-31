import axios from "axios"

const URL = `https://6104aab54b92a000171c5c95.mockapi.io/productos`

const obtenerProductos = async () => {
    try {
        //axios me devuelve la rpta, el estado, datos de mi peticios, data contiene los datos de respuesta
        //axios.get .post .put
        let { data } = await axios.get(URL)
        return data
    } catch (error) {
        throw error
    }
}

export {
    obtenerProductos
}