import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

export default function Chat() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	const URL = "https://chatsocket-vedu.herokuapp.com/";

	const iniciarConexion = () => {
		const { name, room } = queryString.parse(window.location.search);
        setName(name)
        setRoom(room)
		socket = io(URL);
		socket.emit("login", { usuario_correo: name });
        mandarMensaje(`${name} se ha unido`)
	};

	const mandarMensaje = (mensaje) => {
		socket.emit("crear-mensaje", {
			usuario_correo: name,
			mensaje: mensaje,
			room: room,
		});
	};

    useEffect(() => {
        iniciarConexion()
    },[URL])

    useEffect(() => {
        socket.on("emitir-mensajes", (rpta) => {
            console.log(rpta)
        })
    },[])

	return <div></div>;
}
