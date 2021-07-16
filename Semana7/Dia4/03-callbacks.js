const alumnos = ["Jose","Fernando","Christian","Sabiel","Katherine"]

//recuerden que podemos referenciar a una variable casi cualquier cosa
const buscarAlumno = (nombre, callback) => {
    //esta función va a simular la búsqueda de un alumno en un DB
    //como va a buscar en una DB, esto también demora
    setTimeout(() => {
        for(let i = 0; i < alumnos.length; i++){
            if(alumnos[i] === nombre){
                callback(true)
                return; //cuando hacemos un return, se corta la ejecución
            }
        }
        callback(false)
    },1000)
    
}

buscarAlumno("Fernando", (existe) => {
    if(existe === true){
        console.log("El alumno esta dentro de la DB")
    }else{
        console.log("alumno no encontrado")
    }
})