

export default function InputTarea({texto, manejarTexto, anadirTarea}) {
    // console.log(props);
    return (
        <div>
            <input 
                type="text" 
                value={texto}
                onChange={(e) => {manejarTexto(e.target.value)}}
            />
            <button
                onClick={anadirTarea}
            >
                Agregar Tarea
            </button>
        </div>
    )
}
