//new Factura(id, fecha, igv_porcentaje)
let factura1 = new Factura(1, new Date(), 18)

//como sabemos que factura1 tiene las propiedades de Factura y Comprobante, también tendrá un detalle

//new Detalle(det_id, det_cant, det_desc, det_puni)
let detalle_fac1 = new Detalle(1, 2, "ram hp", 229)

console.table(detalle_fac1)

factura1.agregarDetalle(detalle_fac1)
factura1.recalculo()

console.table(factura1)

Comprobante.mostrarFecha()