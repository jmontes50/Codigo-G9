let listaPlatillos = [
  {
    id: 1,
    nombre: "Crema de Verduras",
    descripcion:
      "Suave crema preparada con una variedad de verduras estacionales",
    precio: 12.0,
    stock: 10,
    imagen:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80z",
  },
  {
    id: 2,
    nombre: "Albondigas con salsa Barbeque",
    descripcion:
      "Albondigas de carne de res condimentandas con finas hierbas acompañadas con Salsa Bbq y espinacas",
    precio: 18.0,
    stock: 8,
    imagen:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
  },
  {
    id: 3,
    nombre: "Hamburguesa Royal",
    descripcion: "Carne, Queso, Huevo y tomate, todo envuelto con pan",
    precio: 11.0,
    stock: 14,
    imagen:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 4,
    nombre: "Pizza de la casa",
    descripcion: "Pizza con recetea original de la casa",
    precio: 14.0,
    stock: 7,
    imagen:
      "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 5,
    nombre: "Ceviche de la casa",
    descripcion: "Plato Bandera Peruano acompañado con bebida a elección",
    precio: 20.0,
    stock: 10,
    imagen:
      "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 6,
    nombre: "Ramen Fusión",
    descripcion: "Ramen preparado con ingredientes Peruanos",
    precio: 19.0,
    stock: 6,
    imagen:
      "https://images.unsplash.com/photo-1614563637806-1d0e645e0940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
];

let divContenido = document.getElementById("contenido");

let tbodyCarrito = document.getElementById("tbody-carrito")

let carrito = [];

let dibujarTarjetas = () => {
  let htmlTarjetas = "";

  listaPlatillos.forEach((plato) => {
    htmlTarjetas =
      htmlTarjetas +
      `<div class="tarjeta">
      <div class="imagen">
        <img src="${plato.imagen}">
      </div>
      <div class="texto">
        <h4>${plato.nombre}</h4>
        <p>${plato.descripcion}</p>
        <div class="precio">
          <span>S/ ${plato.precio}</span>
          <button class="btn-agregar" data-idplato="${plato.id}">
            Agregar
          </button>
        </div>
      </div>
    </div>`;
  });

  divContenido.innerHTML = htmlTarjetas;
};

dibujarTarjetas();

/**
 * 1. obtener los elementos mediante el obj document, ya sea por id, etc...
 * 2. obtenido los datos y después pues los hemos convertido o pasado por un algoritmo
 *
 */

//Obtenemos los btn-agregar, después del cambio al innerHTML de divContenido, ya que necesitamos que las tarjetas que representan cada producto existan en el DOM
//Obtenemos un HTMLCollection que pasaremos a un arreglo
let btnsAgregar = document.getElementsByClassName("btn-agregar");
//convertimos el HTMLCollection a un array
let arregloBtnsAgregar = Array.from(btnsAgregar);

//recorrerlo
arregloBtnsAgregar.forEach((boton) => {
  //y por cada botón que obtengamos, le añadiremos un Listener
  boton.addEventListener("click", () => {
    //Necesitamos saber que botón estamos presionando, entonces utilizamos el atributo personalizado que guarda el id del plato, para reconocerlo.
    //y lo hacemos mediante el método getAttribute, este método devuelve el valor del atributo
    let idObtenido = +boton.getAttribute("data-idplato");
    //Requerimos convertir este id a un number para que se compare correctamente, ya que se obtiene como un string, por eso le añadimos un + al momento de buscar
    let platoObtenido = buscarPlatoPorId(idObtenido);

    agregarACarrito(platoObtenido);
  });
});

let buscarPlatoPorId = (id) => {
  for (let i = 0; i < listaPlatillos.length; i++) {
    if (id === listaPlatillos[i].id) {
      return listaPlatillos[i];
    }
  }
};

//1. necesitamos saber si el plato existe
//2. si es que existe tenemos que manejar una cantidad
//3. si es nuevo lo agregamos pero con una cantidad de 1
let agregarACarrito = (platoAPedir) => {
  let indicePlato = carrito.findIndex((Pedido) => {
    if (Pedido.plato.id === platoAPedir.id) {
      return Pedido; //esto no retorna el plato, me retorna o -1 o 0,1,2,3,... (la posicion)
    }
  });

  //Si es que no existe (-1) significa que el plato no se ha encontrado dentro de carrito, es nuevo
  if (indicePlato === -1) {
    //si es nuevo crearemos un pedido, pedido tendrá el plato que estamos pidiendo mas la cantidad de 1
    let pedido = {
      plato: platoAPedir,
      cantidad: 1,
    };
    carrito.push(pedido);
  }else{
    //Si es que ya existe obtendriamos la posición del pedido existente
    //con la posición podemos modificar directamente el pedido deseado y aumentar su cantidad
    carrito[indicePlato].cantidad++
  }
  // console.table(carrito)
  dibujarCarrito()
};

let dibujarCarrito = () => {
  let htmlCarrito = ""

  carrito.forEach((pedido) => {
    //Item - cantidad - P.U. - Subtotal
    htmlCarrito = htmlCarrito + 
    `<tr>
      <td>${pedido.plato.nombre}</td>
      <td>${pedido.cantidad}</td>
      <td>${pedido.plato.precio}</td>
      <td>${pedido.cantidad * pedido.plato.precio}</td>
    </tr>`
  })

  tbodyCarrito.innerHTML = htmlCarrito
}


/////////////////////////////

let btnPagar = document.getElementById("btn-pagar")

btnPagar.addEventListener("click", () => {
  let deseaGuardar = confirm("Desea guardar esta boleta?")
  //deseaGuardar: boolean

  if(deseaGuardar === true && carrito.length > 0){
    //guardamos en el localStorage
    //para poder guardar en el LS, necesitamos que carrito sea un string
    let carritoString = JSON.stringify(carrito)
    // console.log(carrito)
    // console.log(carritoString)
    //localStorage.setItem("clave","valor")
    localStorage.setItem("pedidoGuardado", carritoString)
  }
})


  let recuperarPedidos = localStorage.getItem("pedidoGuardado") //recupero el localStorage
  // console.log(recuperarPedidos)
  carrito = JSON.parse(recuperarPedidos)//reconvierto lo recuperado a JS con JSON.parse
  dibujarCarrito() //vuelvo a dibujar carrito