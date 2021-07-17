const hacerPeticion = (callback) => {
    let cartero = new XMLHttpRequest()
    
    cartero.addEventListener("readystatechange", () => {
        switch(cartero.readyState){
            case 4:
                console.log("RPTA", cartero.readyState)
                let respuesta = cartero.status//200 , 404
                console.log(respuesta)
                if(respuesta === 200){
                    callback("tudo bem")
                }else{
                    callback("borro cassete")
                }
                break
        }
    })
    //200 va bien, 404 va mal
    cartero.open("GET","https://reqres.in/api/users?page=2")
    cartero.send(null)
}

hacerPeticion((queFue) => {
    console.log(queFue)
})