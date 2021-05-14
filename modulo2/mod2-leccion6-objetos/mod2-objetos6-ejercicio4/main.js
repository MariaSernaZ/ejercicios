'use strict'

//EJERCICIO 4: Investigando event
/*Tenemos que preparar un botón con un listener para loguear el objeto event en la consola. Investigar si la clave type que encontramos en él es una propiedad o un método.
Nota: cuando logueamos un objeto en la consola, a su izquierda aparece un triangulo que nos permite desplegarlo para ver sus métodos y propiedades.*/

const buttonEl = document.querySelector(".js-button");

function researchType(event){
  console.log(event);
}

addEventListener('click',researchType);

//La clave "type" es una propiedad que devuelve una cadena de texto con el tipo de evento, en este ejemplo: "click"
