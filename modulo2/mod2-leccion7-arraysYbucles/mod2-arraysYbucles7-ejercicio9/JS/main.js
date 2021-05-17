'use strict';

//EJERCICIO 9
/*Vamos a practicar un poco más con el método querySelectorAll:
En esta misma página abrimos las herramientas para desarrolladoras de Chrome (DevTools) y seleccionamos la pestaña Consola.
Escribimos el siguiente código: document.querySelectorAll('h1'). ¿Qué está devolviendo este método?
Y si escribimos document.querySelectorAll('h1')[0] ¿qué está mostrando en consola este código?
Ahora escribimos document.querySelectorAll('h1')[0].className. ¿qué información nos muestra? ¿Y el código document.querySelectorAll('h1')[0].innerText?
Y por último ¿qué muestra el código document.querySelectorAll('asdf') y por qué?*/


document.querySelectorAll('h1')
// NodeList(11) [h1.reset-3c756112--pageTitle-33dc39a3, h1#contenidos.blockHeading-442b4f12, h1#introduccion.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#en-que-casos-se-utilizan.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#array.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#trabajando-con-arrays.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#bucles.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#bucle-for-of.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#queryselectorall.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#bonus-for-in.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e, h1#recursos-externos-adicionales.blockHeading-442b4f12--blockHeading1WithMargin-b69d755e]


document.querySelectorAll('h1')[0]
// <h1 class=​"reset-3c756112--pageTitle-33dc39a3">​…​</h1>​

document.querySelectorAll('h1')[0].className
// "reset-3c756112--pageTitle-33dc39a3"

document.querySelectorAll('h1')[0].innerText
// "2.7 Arrays y bucles"

document.querySelectorAll('asdf')
// NodeList []length: 0__proto__: NodeList