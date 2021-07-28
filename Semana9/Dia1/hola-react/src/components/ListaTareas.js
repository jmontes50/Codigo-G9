export default function ListaTareas(props) {
    return (
        <ul>
            {props.tareas.map((tar, i) => (
                <li key={i}>
                    {tar}
                </li>
            ))}
        </ul>
    )
}
