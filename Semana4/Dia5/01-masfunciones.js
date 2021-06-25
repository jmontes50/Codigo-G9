function saludar (texto){
  console.log(`Hola, ${texto}`)
  //no estoy retornando nada y tampoco es obligatorio
}

saludar("como estas")
saludar("Soy Osmar")
saludar("que planes tienes")

function multiplicacion(num1, num2){
  //nosotros cuando podemos un return la ejecución de mi función se corta
  //Como el break;
  return num1 * num2
  console.log("Estoy después del return")
}

console.log(multiplicacion(10, 72))

//acerca del return

function esPar(numero){
  if(numero % 2 === 0){
    //verdadero
    return true
    console.log("es verdadero")//esto no se ejecuta
  }else{
    //falso
    return false
  }
}

console.log(esPar(21))

let texto = "aqui"

function sinArgumento(){
  console.log("No tengo argumentos " + texto)
}

sinArgumento()

console.log(sinArgumento())//sinArgumento no retorna nada, es undefined

/**
 * 1. No necesariamente tienen que recibir argumentos
 * 2. No necesariamente tienen que retornar algo, puede que solamente ejecuten el bloque de codigo que tienen dentro
 * 3. para utilizarlos los llamo por su nombre y parentesis, ej, esPar()
 * 4. el código después de un return no se ejecuta, ya que el return finaliza la ejecución de mi función
 */
