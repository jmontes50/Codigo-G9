import {useRef, useEffect} from "react"
import Message from "./Message"

export default function Messages({messages, name}) {

    const final = useRef()

    const irAlFinal = () => {
        final.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        irAlFinal()
    }, [messages])

    return (
        <div style={{height:'700px', overflow:'scroll'}}>
            {messages.map((msj, i) => (
                <div key={i}>
                    <Message msj={msj} name={name} />
                </div>
            ))}
            <div ref={final} />
        </div>
    )
}
