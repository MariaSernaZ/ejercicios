'use strict';

//EJERCICIO 6
//Reescribe el código del ejemplo anterior utilizando un ternario en lugar de un if...else

let avocados;
const avocadoPrice = 1.5;
const money = 33;

const avocadosQuantity = money >= avocadoPrice ? avocados = money / avocadoPrice : avocados = 0;

console.log(avocadosQuantity);

/*if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}*/