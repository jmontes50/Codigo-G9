import { useState, useEffect } from 'react'
import { obtenerProductos } from '../services/productosService'
import Loading from '../components/Loading'
import GroupProducts from '../components/GroupProducts'
import Slider from '@material-ui/core/Slider';

export default function ProductosView() {
    const [productos, setProductos] = useState([])
    const [productosOriginal, setProductosOriginal] = useState([])
    const [cargando, setCargando] = useState(true)
    const [filtroPrecio, setFiltroPrecio] = useState([1, 100])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProductos()
            setProductos(productosObtenidos)
            setProductosOriginal(productosObtenidos)
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }

    const manejarPrecio = (evento, nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }

    useEffect(() => {
        getProductos()
    }, [])

    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((prod) => {
            return prod.prod_precio >= filtroPrecio[0] && prod.prod_precio <= filtroPrecio[1]
        })
        setProductos(productosFiltrados)
    }, [filtroPrecio])

    return (
        <div>
            {cargando ? 
            (<Loading/>) :
            (<div className="py-4">
                <div className="container text-center">
                    <h1 className="my-4">
                        <i className="fas fa-gifts me-3" />
                        Nuestros Productos
                    </h1>
                    <div className="row my-2">
                       <div className="col-sm-12 col-md-6">
                           <h5>Filtrar Por precio</h5>
                           <Slider
                                value={filtroPrecio}
                                onChange={manejarPrecio}
                                valueLabelDisplay="auto"
                                min={1}
                                max={120}
                            />
                       </div>
                    </div>
                </div>
                <GroupProducts productos={productos} />
            </div>)}
        </div>
    )
}
