import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"

export default function CarritoView() {

    const { carrito } = useContext(CarritoContext)

    return (
        <div className="container">
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-cart me-3"/>
                    Carrito de Compras
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.prod_nombre}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.prod_oferta ? "10%" : "Sin Oferta"}</td>
                            <td>S/ {prod.prod_precio}</td>
                            <td>S/ {prod.prod_oferta ? 
                            prod.cantidad * prod.prod_precio * 0.9 : 
                            prod.cantidad * prod.prod_precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
