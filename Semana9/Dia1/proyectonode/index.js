// import axios from "axios"
const axios = require('axios') //importar

//hacer peticiones
//axios.METHOD_HTTP
axios.get("https://reqres.in/api/users?page=2")
.then((respuesta) => console.log(respuesta.data))
.catch((error) => console.log(error))
