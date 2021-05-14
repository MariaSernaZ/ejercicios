'use strict'

//EJERCICIO 2: A la carrera
/*Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.
Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo una maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.*/

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = "periodista";
adalaber1.run = phrase => 'Estoy corriendo';
adalaber1.runAMarathon = distance => `una maratón de ${distance} kilómetros`;

console.log(adalaber1.run() + ' ' + adalaber1.runAMarathon(50));


