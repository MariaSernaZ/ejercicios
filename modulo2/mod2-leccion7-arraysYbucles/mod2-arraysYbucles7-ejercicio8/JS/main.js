'use strict';

/*Ejercicio 8: Botones de alarma
Vamos a partir de un HTML que tiene 3 botones con el texto ALARMA en un fondo blanco. Vamos a hacer que al pulsar en cualquiera de ellos, el fondo de la pantalla se ponga rojo. Si volvemos a pulsar en cualquiera de ellos, el fondo se pondrá blanco. Y así sucesivamente. Vamos a hacer uso de querySelectorAll para evitar repetir mucho código.
*/

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.js-body');

function changeBackground () {
    body.classList.toggle('body-red');
}

for (const button of buttons) {
    button.addEventListener('click', changeBackground);
}
