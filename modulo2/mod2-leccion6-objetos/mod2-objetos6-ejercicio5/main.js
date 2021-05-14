'use strict'

//EJERCICIO 5: Investigando los elementos
/*Vamos a preparar un input de tipo texto, a recogerlo desde JS y a imprimirlo en la consola con console.dir para investigarlo y comentar con la compañera estas propiedades:
  value
  nodeName
  required
Nota: Cuando imprimimos un elemento en la consola con console.log vemos la etiqueta de HTML y podemos desplegarla para ver su contenido. Si queremos ver el objeto con sus propiedades y métodos tendremos que usar console.dir.*/

const input = document.querySelector('.js-input');

console.dir(input);

//value: ""
//nodeName: "INPUT"
//required: false
