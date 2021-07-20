const obtenerEstudiantes = () => {
    //GET
    fetch("https://60f60ddc18254c00176e0100.mockapi.io/estudiantes")
    .then((respuesta) => {
        //Guía de remisión, info acerca de la petición
        console.log(respuesta)
        return respuesta.json()
    })
    .then((datos) => {
        //desempaco mis datos
        console.log(datos)
    })
    .catch((error) => {
        console.log(error)
    })
}

obtenerEstudiantes()

