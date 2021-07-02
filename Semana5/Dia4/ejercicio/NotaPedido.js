class NotaPedido extends Comprobante{
  nota_exo = true;
  constructor(comp_id, comp_fecha, nota_exo){
    super(comp_id, comp_fecha)
    this.nota_exo = nota_exo
  }
  
  recalculo(){
    let total = 0;
    for(let d of this.detalles){
      let cant = d.det_cant
      let prec = d.det_punit
      total += this.calcularSubTotal(cant, prec)
    }
    this.comp_total = total
  }
}