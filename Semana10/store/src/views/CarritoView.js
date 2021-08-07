import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"

export default function CarritoView() {

    const { carrito } = useContext(CarritoContext)
    console.log(carrito)

    return (
        <div>
            
        </div>
    )
}
