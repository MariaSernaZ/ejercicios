'use strict'

//EJERCICIO 2: De viaje
/*
Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
Haz lo mismo para París y Nueva York
Nota: Usa imágenes que encuentres por Internet.
*/

const form = document.querySelector('.js-form');
const imgEl = document.querySelector('.js-img');
const img = document.createElement('img');


function chooseCity(event){
    const selectedCity = event.target.value;
    
    if(selectedCity === '1'){
        img.src = './img/madrid.jpg';
        img.alt = 'Madrid'
    
    } else if(selectedCity === '2'){
        img.src = './img/paris.jpg';
        img.alt = 'París'
    
    } else {
        img.src = './img/newYork.jpg';
        img.alt = 'New York'
    }

    imgEl.appendChild(img);
}


form.addEventListener('change',chooseCity);






