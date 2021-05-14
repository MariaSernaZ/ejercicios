'use strict';

//EJERCICIO 5: Notificaciones arcoiris
//Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto". Crea también 3 clases:
    //1) .success, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuro
    //2) .error, igual pero sustituyendo el verde por rojo
    //3) .warning, lo mismo pero usando el color amarillo

//Usando JavaScript, haremos que:
    //Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
    //Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
    //Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
//Cambia la clase en HTML y comprueba que el código de JavaScript funciona.


const msj = document.querySelector(".js-notify");
const title = document.querySelector(".js-title");
const text = document.querySelector(".js-text");

if (msj.classList.contains('succesavis')) {
    title.innerHTML = "CORRECTO";
    text.innerHTML = "Los datos son correctos";
}
else if (msj.classList.contains('error')) {
    title.innerHTML = "ERROR";
    text.innerHTML = "Ha surgido un error";
}
else {
    title.innerHTML = "AVISO";
    text.innerHTML = "Tenga cuidado";
}

