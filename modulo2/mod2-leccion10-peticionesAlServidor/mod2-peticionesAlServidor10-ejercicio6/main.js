'use strict'

//EJERCICIO 6: La raza del perro
/*Vamos a realizar un ejercicio con la API de 'https://dog.ceo/dog-api/' y la api de 'https://rand.fun/'. Tenemos que pedir un listado de razas de perros, y con un número aleatorio elegir una raza del listado:
1. pintar un mensaje que muestre la raza elegida al azar.
2. pedir una imagen aleatoria de un perro de esa raza y pintarla.
Si has llegado hasta aquí te proponemos otro reto, intenta que la última función sea la única que se encargue de interactuar con html, y sea esta la que pinte la raza y la imagen.*/

const list = document.querySelector('.js-list');

const breeds = {};
const arrBreeds = [];


function getBreedsImage () {
    fetch('https://dog.ceo/api/breeds/list/all') //devuelve un objeto con el listado de razas(breedsData)
      .then(breedsResponse => breedsResponse.json())
      .then(breedsData => {

        for(const breed in breedsData.message){
            arrBreeds.push(breed); //creamos array con posiciones
        } //recorremos el objeto
        console.log(arrBreeds);
        const breeds = breedsData.message;
        list.innerHTML += `<li><img src="${breeds}"/></li>`
    
        console.log(breeds);

        return fetch(`https://api.rand.fun/number/integer?min=0&max=${arrBreeds.length}`); //número aleatorio entre 0 y tamaño del array

      })
      .then(randomNumberResponse => randomNumberResponse.json())
      .then(numberData => {
        console.log(arrBreeds[numberData.result]);
        console.log(numberData.result); // "result" nos indica el número aleatorio

        return fetch(`https://dog.ceo/api/breed/${arrBreeds[numberData.result]}/images/random`);       
      })
      .then(imgResponse => imgResponse.json())
      .then(imgData => {
        const img = document.querySelector('img');
        img.src = imgData.message;
        img.alt = 'Un perro';
        console.log(imgData.message);
      })
}

getBreedsImage();
  
  