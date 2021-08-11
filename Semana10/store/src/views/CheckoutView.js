import {useState, useContext} from 'react'
import { CarritoContext } from "../context/carritoContext"
import { useForm } from "react-hook-form"

export default function CheckoutView() {

    const { carrito } = useContext(CarritoContext)

    const { register, handleSubmit, formState: {errors} } = useForm()

    let total = 0

    total = carrito.reduce((acum, item) => {
        return acum + (item.cantidad * item.prod_precio)
    }, 0)

    return (
        <div className="container mt-4">
            <h1>Verificar Compra</h1>
            <p>Por favor verifique los productos e indique los datos solicitados</p>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h4>Productos en CarritoView</h4>
                    <ul className="list-group">
                        {carrito.map((prod, i) => (
                            <li
                                className="list-group-item d-flex justify-content-between"
                                key={i}
                            >
                                <div>
                                    <span className="fw-bold">
                                        {prod.prod_nombre}
                                    </span>
                                    <br/>
                                    <small>Cantidad: {prod.cantidad}</small>
                                </div>

                                <small className="badge bg-dark rounded-pill p-3">
                                    S/ {prod.cantidad * prod.prod_precio}
                                </small>
                            </li>
                        ))}
                        {total !== 0 ? 
                           (<li className="list-group-item d-flex justify-content-between">
                               <span className="fw-bold">
                                   TOTAL:
                               </span>
                               <span>
                                   S/ {total}
                               </span>
                           </li>) :
                           (<li className="list-group-item">
                               Todavía no ha agregado ningún producto.
                           </li>)
                        }
                    </ul>
                </div>

                <div className="col-sm-12 col-md-6">
                    <h4>Ingrese sus datos:</h4>
                    <form>
                        <div className="mb-2">
                            <label className="form-label">
                                Nombres y apellidos
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ej. Juan Perez"
                                //{...register("nombre", {validaciones})}
                                {...register("nombreCompleto", {required:true})}
                            />
                            {errors.nombreCompleto && 
                            <small className="text-danger">
                                Este campo es obligatorio
                            </small>}
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Número de celular
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ej. +51 926707653"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">
                                Dirección
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ej. Urb. Yanahuara S/N"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
