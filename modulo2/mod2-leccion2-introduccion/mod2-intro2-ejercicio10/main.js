'use strict'

//EJERCICIO 10: Recogiendo números de HTML
//Vamos a duplicar el ejercicio 5 y a modificarlo. En este caso en vez de tener nuestra edad en una constante dentro del fichero de JavaScript, debemos crear un párrafo en el fichero HTML, escribir en él nuestra edad. Desde JavaScript debemos leer la edad para calcular el número de horas que hemos vivido.

const hours = 24;
const days = 365;
const hoursYear = hours * days;
const ageElement = document.querySelector(".js-age");
const age = parseInt(ageElement.innerHTML);
const life = hoursYear * age;

//Cuando recogemos valores de HTML, aunque sean números, su tipo siempre será un string.

console.log(age);

console.log(life);