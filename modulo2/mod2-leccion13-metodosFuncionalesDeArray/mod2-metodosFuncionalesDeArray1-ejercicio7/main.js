'use strict'

//EJERCICIO 7: La media de la carrera
/*
Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?
*/


const times = [56, 9, 45, 28, 35];

//OPCIÓN 1
const resultAverage1 = times.reduce((acc, number) => acc + number/times.length, 0);

console.log(resultAverage1);

//OPCIÓN 2
const resultSum = times.reduce((acc, number) => acc + number, 0);
const resultAverage2 = resultSum/times.length;

console.log(resultAverage2);







