class Factura extends Comprobante {
  fact_igv_p = 0;
  fact_igv_t = 0;
  constructor(comp_id, comp_fecha, fact_igv_p){
    //pasemos los campos necesarios a la clase de mayor jerarquía
    super(comp_id, comp_fecha)

    this.fact_igv_p = fact_igv_p;
  }
}