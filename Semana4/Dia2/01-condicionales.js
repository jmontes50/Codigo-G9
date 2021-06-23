let edad = 18;

// if(evaluo_una_sentencia){
//   Si es verdad se ejecuta esto
// }else{
//   Si no es verdad, por defecto se ejecuta esto otro
// }
if(edad < 18){
  console.log("Noup, eres menor de edad")
}else{
  console.log("Ok, eres mayor, anda vota")
}

let edad2 = 17;

if(edad2 >= 65){
  console.log("Te toca tu pensión 65");
}else if(edad2 == 50){
  console.log("Como tienes 50 años, te damos un reloj");
}else if(edad2 >= 18){
  console.log("Te toca un bono familiar");
}else if(edad2 < 18 && edad2 >= 0){
  console.log("te toca un bono infantil")
}else{
  // por descarte, si ninguna sentencia se cumplio, se ejecuta el contenido del else
  console.log("el valor no es correcto");
}

