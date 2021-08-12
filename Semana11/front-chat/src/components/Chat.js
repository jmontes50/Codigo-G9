import {useState, useEffect} from 'react'
import queryString from "query-string"
import io from "socket.io-client"

let socket

export default function Chat() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const URL = "localhost:5000"

    useEffect(() => {
        //window.location.search => name=Nombre&room=Sala
        const { name, room } = queryString.parse(window.location.search)

        socket = io(URL)
       
        setName(name)
        setRoom(room)

        socket.emit('join', {name, room}, () => {})

        return () => {
            //cuando el componente se destruya, cambiamos de vista, cerramos la pestaña
            socket.emit("disconnect")
            socket.off()
        }

    }, [URL,window.location.search])

    useEffect(() => {
        //.on("tipo_mensaje") es escuchar
        socket.on("message", (message) => {
            console.log(message)
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}
