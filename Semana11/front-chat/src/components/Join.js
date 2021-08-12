import {useState} from 'react'
import {Link} from "react-router-dom"

export default function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="container py-4">
            <div className="row d-flex justify-content-center">
                <div className="col-4">
                    <h2>Ingrese</h2>
                    <div>
                        <div className="mb-3">
                            <label className="form-label">
                                Nombre
                            </label>
                            <input 
                                type="text"
                                placeholder="Ingrese su nombre"
                                className="form-control"
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Sala
                            </label>
                            <input 
                                type="text"
                                placeholder="Ingrese la Sala"
                                className="form-control"
                                value={room}
                                onChange={(e) => {setRoom(e.target.value)}}
                            />
                        </div>
                        <Link 
                            className="btn btn-dark btn-lg" 
                            to={`/chat?name=${name}&room=${room}`}
                        >
                            Ingresar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
