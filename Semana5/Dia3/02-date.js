//como trabajamos conf echas
//El objeto Date va a obtener la fecha de sus computadoras
let ahora = new Date()

console.log(ahora)

//getFullYear me retorna el año
let anioActual = ahora.getFullYear()

console.log("Año actual",anioActual)

//getMonth me retorn el mes
//OJO: para JS Enero comienza en 0 y Diciembre termina en 11
let mesActual = ahora.getMonth()

console.log("Mes actual", mesActual)

//getDate() nos devuelve el día
let diaCalendario = ahora.getDate()

console.log("Día actual", diaCalendario)

//getDay(), me da el valor del dia de la semana en nÚmero contando desde el domingo como 0
let diaSemana = ahora.getDay()
console.log("Dia semana", diaSemana)

//creo una nueva fecha
//new Date(año, mes<11>, dia)
let diaDeVacunacion30 = new Date(2021, 8, 30)

console.log(diaDeVacunacion30)

//TIMESTAMP
//01/01/1970
//getTime()
//me devuelve el timestamp (tiempo desde 01/01/1970 a medianoche) en milisegundos
let timeStampAhora = ahora.getTime()

console.log("ahora", timeStampAhora)

let navidad = new Date(2021, 11, 25)

let diasNavidad = navidad - ahora;

console.log(diasNavidad/1000/60/60/24)