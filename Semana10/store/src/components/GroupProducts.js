import {useState, useEffect} from 'react'

export default function GroupProducts({productos}) {
    console.log(productos)
    return (
        <div className="container">
            <div className="row mt-3">
                {productos.map((prod, i) => (
                    <div className="col-6 col-lg-3">
                        <div className="card mb-4">
                            <img 
                                src={prod.prod_imagen} 
                                className="card-img-top"
                                alt={prod.prod_nombre}
                            />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {prod.prod_nombre}
                                </h6>
                                <span className="fw-bold">
                                    S/ {prod.prod_precio}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
