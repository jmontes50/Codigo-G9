import { useState, createContext } from "react";

export const CarritoContext = createContext()

const CarritoContextProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    const anadirACarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

    return (
        <CarritoContext.Provider value={{carrito, anadirACarrito}}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoContextProvider