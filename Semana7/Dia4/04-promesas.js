const hornearTorta = () => {
    //Como el horneado de mi torta no se como va a ir
    //resolve, va bien
    //reject, va mal
    return new Promise((resolve, reject) => {
        //dentro de la promesa ejecutemos nuestra tarea asincrona
        //la tarea que demora
        setTimeout(() => {
            if(false){
                resolve("La torta esta Lista")
            }else{
                reject("La torta se quemo :/")
            }
        }, 5000)
    })
}

//para saber si fue bien - then()
hornearTorta()
.then((resultado) => {
    console.log(resultado) //resolve
})
.catch((error) => {
    console.log(error)
})