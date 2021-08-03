import {useState, useEffect} from 'react'
import { obtenerProductos } from '../services/productosService'

export default function ListaProductosView() {
    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            // console.log(productosObtenidos)
            setProductos(productosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductos()
    }, [])


    return (
        <div>
            <h1>Productos registrados</h1>

            <table className="table">
                <thead>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {productos.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.prod_precio}</td>
                            <td>{prod.prod_descripcion}</td>
                            <td>{prod.prod_stock}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
