class Factura extends Comprobante {
  fact_igv_p = 0;
  fact_igv_t = 0;
  constructor(comp_id, comp_fecha, fact_igv_p){
    //pasemos los campos necesarios a la clase de mayor jerarquía
    super(comp_id, comp_fecha)//llama al constructor

    this.fact_igv_p = fact_igv_p;
  }

  //va a obtener el igv tras agregar un nuevo detalle
  recalculo(){
    let total = 0;
    for(let i = 0; i < this.detalles.length; i++){
      //la idea aquí es calcular el subtotal de cada detalle, y con c/subtotal añadirlo al total 
      let cant = this.detalles[i].det_cant
      let prec = this.detalles[i].det_punit

      total += this.calcularSubTotal(cant, prec)
    }
    //con esto calculo el igv
    this.fact_igv_t = total * this.fact_igv_p / 100
    //acá fijo el total del comprobante
    this.comp_total = total
  }
}