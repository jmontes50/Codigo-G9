class Comprobante {
  //Vamos a predefinir que valores va a tener esta clase
  //El constructor no siempre tiene que construir todo el objeto
  comp_id = 0;
  comp_fecha = new Date();
  comp_total = 0;
  detalles = []; //vamos a incorporar los items de la compra

  constructor(comp_id, comp_fecha){
    //algo que si requiero al inicio que se contruya es el comp_id, comp_fecha
    this.comp_id = comp_id;
    this.comp_fecha = comp_fecha;
  }

  //Creamos objetos de tipo Detalle y los agregaremos aquí, detalles será un arreglo de objDetalle
  agregarDetalle(objDetalle){
    this.detalles.push(objDetalle)
  }
}