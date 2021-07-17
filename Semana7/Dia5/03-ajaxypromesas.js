const hacerPeticion = () => {
	return new Promise((resolve, reject) => {
		//codigo asincrono
		let cartero = new XMLHttpRequest();

		cartero.addEventListener("readystatechange", () => {
			switch (cartero.readyState) {
				case 4:
					let respuesta = cartero.status; //200 , 404
					console.log(respuesta);
					if (respuesta === 200) {
						resolve("tudo bem"); //va bien
					} else {
						reject("borro cassete"); //va mal
					}
					break;
			}
		});
		//200 va bien, 404 va mal
		cartero.open("GET", "https://reqres.in/api/users?page=2");
		cartero.send(null);
	});
};

hacerPeticion()
	.then((rpta) => {
		console.log(rpta); //resolve
	})
	.catch((err) => {
		console.log(err); //reject
	});
