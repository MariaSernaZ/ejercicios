'use strict'

//EJERCICIO 1: Hola click
//Crear una página HTML con un párrafo en el que ponga Hola y un botón. Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!


const buttonEl = document.querySelector(".js-button");
buttonEl.addEventListener('click', function changeText() {buttonEl.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!"});

