'use strict'

//EJERCICIO 9: Cuántas letras tiene tu nombre
//vamos a hacer un programa que pinte en HTML lo siguiente: El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres, remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.
//Nota: tendremos que guardar el nombre de nuestra compañera en una constante para poder trabajar con él.

const pairName = "María Serna Zafra"
const pairNameElement = document.querySelector('.text-name');
pairNameElement.innerHTML = pairName;

const nameCharacters = pairNameElement.innerHTML;
const charactersElement = document.querySelector('.characters');
console.log(nameCharacters.length);

//----La propiedad length lee todo, incluidos espacios.
const charactersLength = nameCharacters.length;

//---- Aquí abajo hemos hecho la cuenta de la vieja y ha funcionado pero no siempre funciona.
//----Más adelante aprenderemos cómo hacerlo de una manera más fácil sin importar la longitud del contenido.
// const charactersLength = nameCharacters.length -2;


charactersElement.innerHTML = `${charactersLength}`;


