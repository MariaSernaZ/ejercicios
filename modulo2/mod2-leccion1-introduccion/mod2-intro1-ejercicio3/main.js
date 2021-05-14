'use strict'

//EJERCICIO 3: Hola Mundo
//Vamos a crear una página HTML con un párrafo en el que ponga Hola y, usando JavaScript, vamos a cambiar ese texto por Hola Mundo.

const title = document.querySelector(".title");
title.innerHTML += " " + "Mundo";
