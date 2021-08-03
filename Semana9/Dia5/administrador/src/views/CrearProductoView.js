import { useState,useEffect } from "react"
import { crearProducto } from "../services/productosService"

export default function CrearProductoView() {
    const [value, setValue] = useState({
        prod_nombre:'',
        prod_descripcion:'',
        prod_precio:0,
        prod_stock:0,
        prod_oferta:false,
    })


    return (
        <div>
            Crear Producto View
        </div>
    )
}
