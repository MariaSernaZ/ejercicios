'use strict';

//EJERCICIO 7
//Vamos a hacer un pequeño programa que te sugiera una receta en función del ingrediente que le pasemos.
//Para resolverlo nos dan una variable en la que podemos declarar un ingrediente a elegir entre estos tres: pollo, merluza o espinacas, por defecto si no hay ingrediente pondrá 'Nada en la nevera' y según el ingrediente que le pasemos el programa nos devolverá un mensaje por consola diciéndote el ingrediente que has elegido y con las siguientes sugerencias de receta: Filete con patatas / Merluzita en salsa verde / Espinacas rehogadas. Ejemplo: Tu ingrediente es pollo. Puedes freirte un filete con patatas.

let ingredient = 'Espinacas';

switch (ingredient) {
  case 'Pollo':
    console.log('Tu ingrediente es pollo. Nuestra receta sugerida es: Filete con patatas');
    break;
  case 'Merluza':
    console.log('Tu ingrediente es merluza. Nuestra receta sugerida es: Merluzita en salsa verde');
    break;
  case 'Espinacas':
    console.log('Tu ingrediente es espinacas. Nuestra receta sugerida es: Espinacas rehogadas');
    break;
  default:
    console.log('Nada en la nevera');
}