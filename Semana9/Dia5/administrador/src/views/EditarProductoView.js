import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

export default function EditarProductoView() {
    //useParams en forma de objeto me va a dar los parámetros que este recibiendo por la URL
    const {id} = useParams()

    return (
        <div>
            <h1>Editar Producto</h1>
        </div>
    )
}
