'use strict'

//EJERCICIO 6: Información instantánea
//Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
//Nota: el objetivo es hacerlo utilizando event.currentTarget.


// elemento de HTML
const inputEl = document.querySelector('.js-input');
const pElement = document.querySelector('.js-text');

// handler
function write(event) {
  let inputWrite = event.currentTarget.value;
  pElement.innerHTML = inputWrite;
}

// listener sobre el elemento, con tipo de evento y handler
inputEl.addEventListener('keydown', write);