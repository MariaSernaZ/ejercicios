'use strict'

/*EJERCICIO 10: ¿Qué vemos esta noche?
Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca en la consola el nombre de esa película.
*/


/* DESGLOSE DE PASOS A SEGUIR:
1.Al hacer click botón empezar:
    1.- Pintar listado pelis (el padre, siempre irá pintado en HTML y los hijos desde JS)
    2.- escuchar eventos sobre cada elemento de la lista y dibuje en cosola elementos
*/ 


const buttonEl = document.querySelector(".js-button");
const listEl = document.querySelector('.js-list');


//Hemos convertido las constantes inciales con los títulos de las películas en array:
const arr = ['Inception','The butterfly effect', 'Eternal sunshine of the spotless mind', 'Blue velvet','Split'];

function paintList(){
    for(let i=0; i<arr.length; i++){
        listEl.innerHTML += `<li class="listContent"> ${arr[i]} `;
        listEl.innerHTML += `</li>`;
    }
}


function listenLi(){
    const listElements  = document.querySelectorAll('.listContent');

    for (const listElement of listElements) {
        listElement.addEventListener("click", handleClickLi);//estamos escuchando li
    } 
}


function handleClickLi(event){
    console.log(event.target.innerHTML)//utilizamos event para saber info del evento y target del elemento clickado
}


function handleClick(event){
    event.preventDefault();// evita el comportamiento natural del botón que es enviar la página. Se utiliza para botones y enlaces 
    paintList();
    listenLi();
}

buttonEl.addEventListener("click", handleClick);//No añadimos los paréntesis a handleClick para que la ejecute el navegador. Si los añadiese, se ejecutaría cuando carga la página