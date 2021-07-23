//to-do
//1. Obtener Datos 
//1.1 Esos datos están en la estructura que necesito?
//2. Convertir esos datos a HTML
//3. Agregarlos al DOM

//primero imports
import { 
    obtenerProductos, 
    crearProducto, 
    eliminarProducto, 
    obtenerProductoPorId,
    actualizarProducto } from "./productoService.js"
import { imprimirProductos } from "./Interfaz.js"

//variables globales
const btnCrear = document.getElementById("btnCrear")
const modalCrear = document.getElementById("modalCrear")
const bsModalCrear = new bootstrap.Modal(modalCrear)
const formCrear = document.getElementById("formCrear")

let modoActualizar = false
let productoActualizar; //esta variable almacenara el id a actualizar

//codigo
const getProductos = () => {
    obtenerProductos()
    .then(productos => {
        // console.log(productos)
        imprimirProductos(productos)
        getBotonesEliminar()
        getBotonesActualizar()
    })
}
getProductos()

btnCrear.addEventListener("click", () => {
    bsModalCrear.show()
})

//escuchar el submit
formCrear.addEventListener("submit", async (e) => {
    e.preventDefault()

    const nuevoProducto = {
        prod_nombre: formCrear.prod_nombre.value,
        prod_descripcion: formCrear["prod_descripcion"].value,
        prod_precio: formCrear["prod_precio"].value,
        prod_stock: formCrear["prod_stock"].value,
        prod_oferta: formCrear["prod_oferta"].value,
    }

    //producto Editado va a tener la info del formulario y el id del producto a editar
   const productoEditado = {
        prod_id:productoActualizar,
        prod_nombre: formCrear.prod_nombre.value,
        prod_descripcion: formCrear["prod_descripcion"].value,
        prod_precio: formCrear["prod_precio"].value,
        prod_stock: formCrear["prod_stock"].value,
        prod_oferta: formCrear["prod_oferta"].value,
    } 

    try {
        if(modoActualizar === false){
            //si no estamos actualizando, creamos un nuevo producto
            let rpta = await crearProducto(nuevoProducto)
            // console.log(rpta)
            formCrear.reset() //limpio el formulario
            bsModalCrear.hide() //escondo el modal
            getProductos() //obtengo los productos actualizados
        }else{
            let rpta = await actualizarProducto(productoEditado)
            formCrear.reset()
            bsModalCrear.hide()
            getProductos()
            modoActualizar = false //como ya terminamos de actualizar lo regreso a su modo original
        }
        
    } catch (error) {
        console.log(error)
    }
    
})

const getBotonesEliminar = () => {
    const btnsEliminar = document.getElementsByClassName("eliminar")
    const arrBtnsEliminar = Array.from(btnsEliminar)
    
    arrBtnsEliminar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const id = boton.getAttribute("data-id")

            Swal.fire({
                icon:'warning',
                title:'Desea eliminar el producto?',
                showConfirmButton:true,
                confirmButtonText:'Si, eliminar',
                showCancelButton:true,
                cancelButtonText:'No, cancelar'
            }).then(async (result) => {
                if(result.isConfirmed){
                    let respuesta = await eliminarProducto(id)
                    console.log(respuesta)
                    getProductos()
                }
            })

        })
    })
}

const getBotonesActualizar = () => {
    const btnsActualizar = document.getElementsByClassName("actualizar")
    const arrBtnsActualizar = Array.from(btnsActualizar)

    arrBtnsActualizar.forEach((boton) => {
        boton.addEventListener("click", async() => {
            const id = boton.getAttribute("data-id")
            const productoObtenido = await obtenerProductoPorId(id)
            // console.log(productoObtenido)
            let {prod_nombre, prod_descripcion, prod_stock, prod_precio, prod_oferta} = productoObtenido

            formCrear.prod_nombre.value = prod_nombre
            formCrear.prod_descripcion.value = prod_descripcion
            formCrear.prod_stock.value = prod_stock
            formCrear.prod_precio.value = prod_precio
            formCrear.prod_oferta.value = prod_oferta

            productoActualizar = id
            modoActualizar = true

            bsModalCrear.show()
        })
    })
}