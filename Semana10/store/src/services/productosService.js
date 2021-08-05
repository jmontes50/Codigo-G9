import axios from "axios"

const URL = `${process.env.REACT_APP_API}/productos`

const obtenerProductos = async() => {
    try {
        let { data } = await axios.get(URL)
        return data //ya tenemos los datos
    } catch (error) {
        throw error
    }
}

const obtenerProductoPorId = async(id) => {
    try {
        let { data } = await axios.get(`${URL}/${id}`)
        return data //ya tenemos los datos
    } catch (error) {
        throw error
    } 
}

export{
    obtenerProductoPorId,
    obtenerProductos
}