import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { editarProducto, obtenerProductoPorId } from '../services/productosService'

export default function EditarProductoView() {
    //useParams en forma de objeto me va a dar los parámetros que este recibiendo por la URL
    const {id} = useParams()

    const getProducto = async () => {
        try {
            const productoObtenido = await obtenerProductoPorId(id)
            console.log(productoObtenido)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProducto()
    },[])

    return (
        <div>
            <h1>Editar Producto</h1>
        </div>
    )
}
