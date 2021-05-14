'use strict'

//EJERCICIO 2: El precio de la fruta
//Imagina que vamos a la frutería y compramos lo siguiente:
//2 kilos de kiwis a 5€ / kg
//3 kilos de peras conferencia (no una cualquiera) a 2€ / kg
//Medio kilo de uvas a 4€ / kg
//Con lo que hemos visto durante los ejemplos y textos anteriores y usando JavaScript, vamos a calcular el precio total como si lo hiciésemos en una hoja de papel toda la vida pero de manera mucho más guay. El resultado debe mostrarse en la consola del navegador.

const kiwi = 2;
const precioKiwi = 5;
const resultKiwi = kiwi * precioKiwi;

console.log(resultKiwi);

const pera = 3;
const precioPera = 2;
const resultPera = pera * precioPera;

console.log(resultPera);

const uva = 0.5;
const precioUva = 4;
const resultUva = uva * precioUva;

console.log(resultUva);

const total = resultKiwi + resultPera + resultUva;

console.log(total);