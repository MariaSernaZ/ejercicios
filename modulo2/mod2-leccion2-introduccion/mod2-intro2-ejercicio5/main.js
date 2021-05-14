'use strict'

//EJERCICIO 5: Calcular el número total de horas que hemos vivido 
//En este caso vamos a crear un código que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.

const horas = 24;
const dias = 365;
const horasAño = horas * dias;
const edad = 60;
const vida = horasAño * edad;

console.log(vida);