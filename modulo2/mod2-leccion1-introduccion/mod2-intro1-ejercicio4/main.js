'use strict';

//EJERCICIO 4:Seleccionando Adalabers
//Hay que crear una página HTML que contenga un listado con tu nombre y el de tu compañera, y un título que diga "La Adalaber seleccionada es: ". Usando JavaScript, tenemos que cambiar el título añadiendo el nombre del primer li.
//Una vez hecho esto, cambia el código para que el nombre sea el del segundo li.

let titleElement = document.querySelector(".title");
//let listElement1 = document.querySelector('.item-list1');
let listElement2 = document.querySelector('.item-list2');

//titleElement.innerHTML += listElement1.innerHTML;
titleElement.innerHTML += listElement2.innerHTML;

//console.log(listElement1);