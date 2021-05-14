'use strict'

//EJERCICIO 5: Protege ese password
//A partir de una página HTML en la que ponga "Mi contraseña es: Ada2020" y, usando JavaScript, tenemos que cambiar el texto 'Ada2020' por '**'.

const text= document.querySelector(".text");
const content = "Mi contraseña es: *******";
text.innerHTML = content;

