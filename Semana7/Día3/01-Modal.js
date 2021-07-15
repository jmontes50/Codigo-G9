let btnModal = document.getElementById("btnAbrir")

let miModal = document.getElementById("miModal")

// let bsModal = new bootstrap.Modal(document.getElementById("miModal"))
let bsModal = new bootstrap.Modal(miModal)

console.log(bsModal)

btnModal.addEventListener("click",() => {
    //mas operaciones 

    //validaciones

    //mostramos
    bsModal.show()
})

setTimeout(() => {
    bsModal.show()
},3000)