
export default function Input({message, setMessage, mandarMensaje}) {
    return (
        <div className="row">
            <div className="col-8">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Ingrese un nuevo mensaje"
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                    onKeyPress={e => e.key === 'Enter' ? mandarMensaje() : null}
                />
            </div>
            <div className="col-4">
                <div className="d-grid">
                    <button className="btn btn-dark" onClick={mandarMensaje}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}
