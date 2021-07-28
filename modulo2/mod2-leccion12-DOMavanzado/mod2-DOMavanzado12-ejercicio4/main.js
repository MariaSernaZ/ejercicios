'use strict'

//EJERCICIO 4: Párrafos de altura
/*
Vamos a crear un div en HTML que contenga tres párrafos con un texto aleatorio. Con la ayuda de JavaScript vamos a obtener su tamaño usando la propiedad offsetHeight. Posteriormente y usando el atributo HTML style vamos a configurar que su altura será un tercio de la actual.
*/

const textsEl  = document.querySelectorAll('.text');

for (const text of textsEl) {
    let textHeight = text.offsetHeight;

    text.style.height = `${textHeight/3}`;
}








