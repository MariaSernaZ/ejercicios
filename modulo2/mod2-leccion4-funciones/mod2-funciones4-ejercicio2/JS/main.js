'use strict';

//EJERCICIO 2: Función media
//Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.

function average(a, b, c, d) {
    const result = (a + b + c + d) / 4;
  
    return result;
}
  
const averageResult = average(1, 3, 4, 8);

console.log(averageResult);
