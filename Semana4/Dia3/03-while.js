//while -> pregunta y si es verdad, ejecutas
// let contador = 1;

// while(contador < 10){
//   console.log(`el contador es : ${contador}`)
//   //Siempre que utilicemos una estructura repetitiva, vamos a necesitar un condicional/limitante
//   contador = contador + 1
// }

// //Pero lo que este acá abajo después del while, no se va a ejecutar hasta que termine el while
// console.log(`Yo estoy después del while ${contador}`)

//do while -> haz y luego preguntas
let contador2 = 1;

do{
  console.log(`el contador es : ${contador2}`);
  contador2 = contador2 + 1;
}while(contador2 <= 0 )