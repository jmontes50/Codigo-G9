
export default function FormProducto() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        Nombre Producto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="prod_nombre"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Descripción Producto
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="prod_descripcion"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Precio Producto
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="prod_precio"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Stock Producto
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="prod_stock"
                    />
                </div>

                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="prod_oferta"
                    />
                    <label className="form-check-label">
                        Ofertar Producto
                    </label>
                </div>
            </form>
        </div>
    )
}
