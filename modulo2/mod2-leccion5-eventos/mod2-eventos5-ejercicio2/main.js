'use strict'

//EJERCICIO 2: ¿Cómo te llamas?
//Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.
//Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. Si para leer y modificar el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, en el caso de los inputs utilizaremos value.

// elemento de HTML
const button = document.querySelector(".js-button");

// handler
function showText() {
    const input = document.querySelector(".js-input").value;
    console.log(`Hola ${input}`);
  }
  
  // listener sobre el elemento, con tipo de evento y handler
  button.addEventListener('click', showText);
