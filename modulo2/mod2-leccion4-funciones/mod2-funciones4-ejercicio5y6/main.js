'use strict';

//EJERCICIO 5: querySelector para todas
//Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
//Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. 

//Nota: Prepara un HTML con varios elementos para poder probarla.

/*function getEl(select){
    const element = document.querySelector(select);
    return element;
}

const buttonEl = getEl('.js-button');
const titleEl =  getEl('.js-title');
const listItemEl =  getEl('.js-listItem2');

console.log(buttonEl);
console.log(titleEl);
console.log(listItemEl);*/

//EJERCICIO 6: Logueando errores
//Nos hemos dado cuenta de que cuando llamamos a getEl a veces nos equivocamos escribiendo el selector (se nos olvida el punto de la clase, nos comemos una letra...), a partir de ahí todo falla y nos cuesta encontrar dónde está el error.
//Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:
//Al recoger el elemento de HTML vamos a guardarlo en una constante.
//Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}
//Finalmente tras nuestro condicional retornaremos la constante con el elemento.
//Nota: podemos imprimir/loguear errores con console.error()

function getEl(select){
    const element = document.querySelector(select);
    if (element===null) {
        console.log (`No existe ningún elemento con clase, id o tag llamado ${select}`);
    } 
    
    return element;
}

const buttonEl = getEl('js-button');
console.log(buttonEl);

const titleEl =  getEl('.js-title');
console.log(titleEl);