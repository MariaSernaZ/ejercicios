'use strict'

//EJERCICIO 8: Lista de perretas. 
//El objetivo de este ejercicio es pintar tres elementos dentro de una lista. Cada uno de ellos contendrá una imagen. Las imágenes y textos los obtendremos a partir de los siguientes datos:

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';


const list1 = document.querySelector(".list-item1");
list1.innerHTML = `
<img class="img1" src="https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg"/>
  ${firstDogName}`;


const list2 = document.querySelector(".list-item2");
list2.innerHTML = `
  <img class="img2" src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg"/>
    ${secondDogName}`;

const list3 = document.querySelector(".list-item3");
list3.innerHTML = `
    <img class="img1" src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg"/>
      ${thirdDogName}`;