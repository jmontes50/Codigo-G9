let chanchito = +prompt("Ingrese lo ahorrado")

// if(evaluamos){
//   si es verdad ocurre esto
// }

if(chanchito > 599){
  console.log("Puedes comprar un Logitech G502")
}else if(chanchito >= 200){
  console.log("Puedes comprar un MX 2S")
}else if(chanchito == 149 || chanchito == 159){
  console.log("Puedes comprar estas ofertas")
}else{
  console.log("Puedes comprar un logitech estandar o seguir ahorrando")
}

//Año bisiesto
//1. Si es que es divisible entre 4, que su residuo sea 0 ES bisiesto
//2. Si es que es divisible entre 100 y tiene residuo 0, NO ES bisiesto
//3. Si es que el año es divisible entre 400 y tiene residuo 0, ES bisiesto

let anio = 1700;

if((anio % 4 == 0 && anio %100 != 0) || anio % 400 == 0){
  console.log("Es bisiesto!")
}else{
  console.log("Nah, no es bisiesto")
}

//Si comparamos solamente con == compara el contenido/valor

//si comparamos con el === comparamos el valor y también el tipo de dato

let numero = "100"

if(numero === 100){
  console.log("es un centenar")
}else{
  console.log("No es un centenar")
}