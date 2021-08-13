export default function Message({ msj, name }) {
	let usuarioActual = false;

	const nameTrim = name.trim();

	if (msj.user === nameTrim) {
		usuarioActual = true;
	}

	return usuarioActual ? (
		<div className="row">
			<div className="col-6"></div>
			<div className="col-6">
				<div className="bg-dark p-1">
					<small>{nameTrim}</small>
					<p className="text-white">{msj.text}</p>
				</div>
			</div>
		</div>
	) : (
		<div className="row">
			<div className="col-6">
				<div className="bg-secondary p-1">
					<small>{msj.user}</small>
					<p className="text-white">{msj.text}</p>
				</div>
			</div>
            <div className="col-6"></div>
		</div>
	);
	
}
