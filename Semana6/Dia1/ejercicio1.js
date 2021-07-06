/**
 * 1. tenemos que obtener los elementos del DOM, que vamos a manipular
 * 
 * 
 */

let divContenido = document.getElementById("contenido")

console.log(typeof divContenido) //es un objeto

divContenido.innerHTML = "<h1>Perú campeón</h1>"

let titulo = "AppStore"

//Manejamos el contenido HTML de un objeto element como un string
divContenido.innerHTML = `<header>
                            <h1>
                              ${titulo}
                            </h1>
                          </header>`

//Crear nodos/objetos_element en JS
 let titulo2 = document.createElement("h2")

 //cuando creamos elementos, estos se crean en JS, solamente existen dentro de JS, no tienen ni contenido, ni están colocados en el DOM

 //para dar contenido
 titulo2.innerHTML = "Segundo título"

 //para añadir al HTML
 //recuerden: is like a .push()
 //elementHTMLPadre.appendChild(elementoHTMLHijo)
 divContenido.appendChild(titulo2)

let imagen = document.createElement("img")

//element.setAttribute("nombre_atributo","valor")
imagen.setAttribute("src", "https://images.unsplash.com/photo-1623228675987-57d5999f6c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80")

//prepend, lo pone al inicio
 //elementHTMLPadre.prepend(elementoHTMLHijo)
divContenido.prepend(imagen)

let bebidas = [
  {
    nombre:"Agua",
    saludable:true
  },
  {
    nombre:"CocaCola",
    saludable:false
  },
  {
    nombre:"Jugo de Papaya",
    saludable:true
  },
  {
    nombre:"Maltin",
    saludable:true
  },
  {
    nombre:"Cerveza",
    saludable:false
  }
]

//operador ternario
//condicional ? verdadero : false
// saludable === true ? console.log("sano") : console.log("malo")

//Vamos a convertir este arreglo de bebidas, en una tabla, donde me muestre en 1 columna, el nombre y en otra columa si es saludable.
//Si saludable es TRUE que muestre "recomendado" de color VERDE 
//si es FALSE que muestre "dañino" en color ROJO

/**
 * 1. De donde obtengo los datos? ✔
 * 1.1 Los datos están de la forma que requiero✔
 * 2.Donde mostraremos esos datos? en tablita✔
 * 2.1 crear un elemento✔
 * 2.2 estructurar ese elemento (añadirle atributos, o HTML)✔
 * 3. convertir los datos a HTML ✔
 * 3.1 agregarlos
 * 4. Agregarlos a un elemento ya existente
 */

let tablita = document.createElement("table")

let headTabla = `<tr>
                    <th>Nombre</th>
                    <th>Recomendable</th>
                  </tr>`

let contTabla = "";
//convertimos los datos a HTML
bebidas.forEach((item) => {
  contTabla = contTabla + 
  `<tr>
    <td>
      ${item.nombre}
    </td>
    <td>
      ${item.saludable === true ? "recomendado" : "malo"}
    </td>
  </tr>`
})
//concatenamos la cabecera de la tabla con el contenido
tablita.innerHTML = headTabla + contTabla

//y lo añado como hijo de divContenido
divContenido.appendChild(tablita)


