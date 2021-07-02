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

  //necesitamos según la cantidad y el P.Unit.
  //obtener el valor de cada detalle
  calcularSubTotal(cantidad, p_unit){
    return cantidad * p_unit
  }

  //static, hace que no requiera crear un nuevo objeto (no necesita una instancia)
  static mostrarFecha(){
    console.log(new Date())
  }
}