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

// obtenerEstudiantes()

const crearEstudiante = () => {
    const nuevoEstudiante = {
        nombres:"Natasha",
        apellidos:"Rommanoff",
        telefono:70979038,
        direccion:"S/N"
    }
    const cabecera = {
        method:'POST',//PUT,DELETE
        headers:{
            //para que la API sepa como procesarlo
            'Content-Type':'application/json'
        },
        //lo convertimos a un JSON
        body:JSON.stringify(nuevoEstudiante)
    }

    //fetch(url, configuracion)
    fetch("https://60f60ddc18254c00176e0100.mockapi.io/estudiantes", cabecera)
    .then((respuesta) => {
        //info del response
        console.log(respuesta)
        return respuesta.json() //la respuesta la convierte a JS
    })
    .then((estudianteCreado) => {
        console.log(estudianteCreado)
    })
    .catch((err) => {
        console.error(err)
    })

}

// crearEstudiante()

const actualizarEstudiante = (id) => {
    //pongo los campos que tenga en mis api, solo los que quiero modificar/actualizar
    const estudianteModificado = {
        nombres:"Antonio"
    }
    //indico que el método será PUT
    const configuracion = {
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(estudianteModificado)
    }

    fetch(`https://60f60ddc18254c00176e0100.mockapi.io/estudiantes/${id}`, configuracion)
    .then((respuesta) => {
        console.log(respuesta)
        return respuesta.json()
    })
    .then((estudianteActualizado) => {
        console.log(estudianteActualizado)
    })
    .catch((err) => {
        console.error(err)
    })
    // .finally(() => {

    // })
}

actualizarEstudiante(6)