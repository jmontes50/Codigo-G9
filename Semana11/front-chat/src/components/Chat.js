import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

export default function Chat() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

	const URL = "localhost:5000";

	const iniciarConexion = () => {
		const { name, room } = queryString.parse(window.location.search);
        setName(name)
        setRoom(room)
		socket = io(URL);
		socket.emit("join", { name: name, room:room }, () => {});
        // mandarMensaje(`${name} se ha unido`)
	};

	const mandarMensaje = () => {
		socket.emit("sendMessage", message, () => {
            console.log("enviado")
        });
	};

    useEffect(() => {
        iniciarConexion()
    },[URL])

    useEffect(() => {
        socket.on("message", (rpta) => {
            console.log(rpta)
        })
    })

	return <div>
                <input 
                    type="text" 
                    className="form-control" 
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                />
                <button className="btn btn-dark" onClick={mandarMensaje}>
                    Enviar
                </button>
            </div>;
}
