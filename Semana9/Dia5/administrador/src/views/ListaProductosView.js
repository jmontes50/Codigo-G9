import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
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
            <Link className="btn btn-primary btn-lg my-2" to="/crear">
                Crear Producto
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.prod_precio}</td>
                            <td>{prod.prod_descripcion}</td>
                            <td>{prod.prod_stock}</td>
                            <td>
                                <Link 
                                    className="btn btn-warning btn-sm" 
                                    to={`/editar/${prod.prod_id}`}
                                >
                                    <i className="fas fa-edit"></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
