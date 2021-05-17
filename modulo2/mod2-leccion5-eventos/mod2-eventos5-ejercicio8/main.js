'use strict'

//EJERCICIO 8: Más botones
//Partiendo del ejercicio anterior vamos a añadir un nuevo botón a nuestra página. Tenemos que ponerle un listener y a reutilizar el handler que ya teníamos. Es decir, los dos botones deben tener el mismo handler.
//Cuando la usuaria pulse un botón el cambio de clase sucederá solamente sobre el botón pulsado.


// elemento de HTML
const buttonEl = document.querySelector('.js-button');
const buttonEl2 = document.querySelector('.js-button2');

// handler
function clickButton (event) {
  const selectButton = event.currentTarget;
  selectButton.classList.toggle("js-changeButton"); //añade y quita la clase
}

// listener sobre el elemento, con tipo de evento y handler
buttonEl.addEventListener('click', clickButton);
buttonEl2.addEventListener('click', clickButton);