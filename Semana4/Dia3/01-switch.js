let producto = +prompt("Ingrese el código del producto, ej. 1");

switch(producto){
  case 1:
    console.log("Papitas");
    break;
  case 2:
    console.log("Chocman");
    break;
  case 3:
    console.log("Chicharron");
    break;
  case 4:
    console.log("Papitas Picantes");
    break;
  case 5:
    console.log("Choco Soda");
    break;
}

/**
viaje de promo de codigo
Hemos hablado con una agencia de viajes
Depende, de la cantidad de alumnos que viaje
Si son 100 alumnos a más el costo x alumno es $ 65
Si son 50 a 99 alumnos el costo x alumno es $ 70
Si son 30 a 49 alumnos el costo x alumno es $ 95
y si son menos de 30 alumnos el alquiler del autobus es de $ 4000
*/

let numAlumnos = 50;
let precioFinal = 0;

switch(true){
  case (numAlumnos >= 100):
    precioFinal = numAlumnos * 65;
    console.log(precioFinal)
    break;
  case (numAlumnos < 100 && numAlumnos >= 50):
    precioFinal = numAlumnos * 70;
    console.log(precioFinal)
    break;
  case (numAlumnos < 50 && numAlumnos >= 30):
    precioFinal = numAlumnos * 95;
    console.log(precioFinal)
    break;
  default:
    console.log("cuesta 4000")
}