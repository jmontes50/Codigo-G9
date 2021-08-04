import { useState,useEffect } from "react"
import Swal from "sweetalert2"

import { crearProducto } from "../services/productosService"
import FormProducto from "../components/FormProducto"

export default function CrearProductoView() {
    const [value, setValue] = useState({
        prod_nombre:'',
        prod_descripcion:'',
        prod_precio:0,
        prod_stock:0,
        prod_oferta:false,
    })

    const actualizarInput = (e) => {
        if(e.target.name === "prod_oferta"){
            setValue({
                ...value,
                [e.target.name]:e.target.checked
            })
            return
        }
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            await crearProducto(value)
            await Swal.fire({
                icon:'success',
                title:'Producto creado!!',
                showConfirmButton:false,
                timer:2000
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Crear producto</h1>

            <FormProducto 
                value={value} 
                actualizarInput={actualizarInput} 
                manejarSubmit={manejarSubmit}
            />
        </div>
    )
}
