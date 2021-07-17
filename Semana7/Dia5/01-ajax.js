let btnGet = document.getElementById("btnGet")

btnGet.addEventListener("click", () => {
    //Este cartero, es el que se va a encargar de hacer las peticiones
    let cartero = new XMLHttpRequest()
    
    //para saber la situacion de nuestro cartero, en que anda nuestra carta
    cartero.addEventListener("readystatechange", () => {
       //cartero.readyState, esta es una propiedad que me dice cual es la situación, como cuando hacemos un seguimiento y nos dice, salio a destino, esta en x avión, y lo hará mediante números de 1 al 4
        switch(cartero.readyState){
            case 1:
                //rotular nuestra carta
                console.log("OPEN", cartero.readyState)
                break
            case 2:
                //ponerla en el buzo
                console.log("SEND", cartero.readyState)
                break
            case 3:
                //esperando, viajando
                console.log("DATA", cartero.readyState)
                break
            case 4:
                //ya llego y recibi una respuesta
                console.log("RPTA", cartero.readyState)
                let respuesta = cartero.responseText
                console.log(respuesta)
                break
        }
    })
    //yo rotulo mi carta, GET estoy pidiendo datos
    cartero.open("GET","https://reqres.in/api/users?page=2")

    //aqui lanzamos nuestra carta al buzon
    cartero.send(null)
})