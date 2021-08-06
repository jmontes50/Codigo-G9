import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { obtenerProductoPorId } from '../services/productosService'
import Loading from '../components/Loading'

export default function ProductoView() {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    const getProducto = async () => {
        try {
            let productoObtenido = await obtenerProductoPorId(id)
            setProducto(productoObtenido)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProducto()
    }, [])

    return (
        <div>
           {cargando ? (<Loading />) : null}
        </div>
    )
}
