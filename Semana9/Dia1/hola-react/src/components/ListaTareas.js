export default function ListaTareas(props) {
    return (
        <ul>
            {props.tareas.map((tar, i) => (
                <li key={i}>
                    {tar} <button onClick={() => {props.eliminarTarea(i)}}>X</button>
                </li>
            ))}
        </ul>
    )
}
