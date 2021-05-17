'use strict'

//EJERCICIO 5: Jugando con el teclado
//Tenemos que crear una página vacía. Al pulsar la tecla 'r' su color de fondo cambia a rojo y al pulsar la 'm' a morado. Vamos a escuchar un evento de teclado directamente sobre el elemento document.

const docAll = document.querySelector('.js-html');

function changeColor(event) {
    let key = event.key;

    if (key === "r"){
        docAll.classList.add('js-html-red');
        docAll.classList.remove('js-html-purple');
    }
    else if (key=== "m"){
        docAll.classList.add('js-html-purple');
        docAll.classList.remove('js-html-red');
    }
}

document.addEventListener('keydown', changeColor);