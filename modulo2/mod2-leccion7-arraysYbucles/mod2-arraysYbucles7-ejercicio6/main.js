'use strict'

//EJERCICIO 6: Tenemos mucho en común
/*Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.*/

/*  1. Crear formulario
    2. Botón al clickar: 
        - guarda info en array
        - mostrar mensaje por cada OBRA
 */

const buttonEl = document.querySelector('.js-button');
const inputEl1 = document.querySelector('.movie1');
const inputEl2 = document.querySelector('.movie2');

const arrMovies = [];


function saveInfo(){
    arrMovies[0] = inputEl1.value;
    arrMovies[1] = inputEl2.value;
}

function showMessage(){
    for(const movie of arrMovies){
        console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`);
    }  
}

function handleClick(){
    saveInfo();
    showMessage();
}

buttonEl.addEventListener('click', handleClick)