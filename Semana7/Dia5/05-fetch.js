//fetch("url")
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) => {
    console.log(respuesta) //información del response
    return respuesta.json()
})
.then((datos) => {
    console.log(datos)
})