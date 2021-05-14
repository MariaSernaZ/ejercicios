'use strict'

//EJERCICIO 7: 1, 2, 3, responda otra vez
//Crear una página HTML con una lista ul vacía y, usando JavaScript, añadir al contenido de esa lista tres li, el primero tendrá como texto 1, el segundo 2 y el tercero 3.


const ulList = document.querySelector(".list");
const contentList = ulList.innerHTML += "<li>texto1</li>" + "<li>texto2</li>"+ "<li>texto3</li>";