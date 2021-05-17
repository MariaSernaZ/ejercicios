'use strict'

//EJERCICIO 3: Dame ipsum
//Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo párrafo a la página con lorem ipsum.

// elemento de HTML
const pElement = document.querySelector('.js-text');

// handler
function addText() {
  pElement.innerHTML += "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consectetur quas animi ipsa assumenda rem aut ea est placeat ad, optio possimus molestiae nostrum. Ipsum eius voluptates qui similique totam.</p>";
}

// listener sobre el elemento, con tipo de evento y handler
pElement.addEventListener('mouseover', addText);