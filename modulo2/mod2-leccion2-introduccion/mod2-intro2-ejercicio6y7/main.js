'use strict'

//EJERCICIO 6 y 7: Hola Adalaber
//Vamos a preparar en una constante con el nombre de una compañera, y utilizándola tenemos que escribir un saludo en la página. Si nuestra compañera se llamará Lola quedaría así:

const namePair = "Bárbara";
const title = document.querySelector(".title");
title.innerHTML = "Hola" + " " + namePair + " " + "encantada de conocerte."


//Interpolación de cadenas:
title.innerHTML = `Hola ${namePair} encantada de conocerte.`