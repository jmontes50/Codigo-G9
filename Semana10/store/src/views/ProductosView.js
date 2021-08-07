import { useState, useEffect } from 'react'
import { obtenerProductos } from '../services/productosService'
import Loading from '../components/Loading'
import GroupProducts from '../components/GroupProducts'

export default function ProductosView() {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getProductos()
    }, [])

    return (
        <div>
            {cargando ? 
            (<Loading/>) :
            (<div>
                <GroupProducts productos={productos} />
            </div>)}
        </div>
    )
}
