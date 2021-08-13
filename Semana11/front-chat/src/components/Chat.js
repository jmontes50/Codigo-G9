import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Input from "./Input";
import Messages from "./Messages"

let socket;

export default function Chat() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const URL = "localhost:5000";

	const iniciarConexion = () => {
		const { name, room } = queryString.parse(window.location.search);
		setName(name);
		setRoom(room);
		socket = io(URL);
		socket.emit("join", { name: name, room: room }, () => {});
		// mandarMensaje(`${name} se ha unido`)
	};

	const mandarMensaje = () => {
		socket.emit("sendMessage", message, () => {
			console.log("enviado");
		});
	};

	useEffect(() => {
		iniciarConexion();
	}, [URL]);

	useEffect(() => {
		socket.on("message", (rpta) => {
			console.log(rpta);
            setMessages([...messages, rpta])
		});
	}, [messages]);

	return (
		<div className="container py-4">
			<h1 className="text-center my-3">CodiChat</h1>
            <Messages messages={messages} name={name} />
			<Input
				message={message}
				setMessage={setMessage}
				mandarMensaje={mandarMensaje}
			/>
		</div>
	);
}
