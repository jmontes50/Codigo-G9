import Message from "./Message"

export default function Messages({messages, name}) {
    return (
        <div>
            {messages.map((msj, i) => (
                <div key={i}>
                    <Message msj={msj} name={name} />
                </div>
            ))}
        </div>
    )
}
