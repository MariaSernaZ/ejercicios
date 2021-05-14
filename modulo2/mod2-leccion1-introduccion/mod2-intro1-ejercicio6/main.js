'use strict'

//EJERCICIO 6: Lorem ipsum
//Tenemos que crear una página HTML con un solo div, y usando JavaScript, añadir un h1 con el texto "Lorem ipsum", una imagen con el src http://via.placeholder.com/350x150 y un párrafo con el texto "Lorem ipsum dolor sit amet, consectetur adipisicing elit".


const div = document.querySelector(".text");
const contentH1 = div.innerHTML += "<h1>Lorem Ipsum</h1>";
const contentImg = div.innerHTML += "<img src= http://via.placeholder.com/350x150/>";
const contentText = div.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";