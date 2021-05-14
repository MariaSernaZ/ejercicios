'use strict';

//EJERCICIO 1: Función multiplicación
//Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().

function multi(a, b) {
    const result = a * b;
  
    return result;
  }
  
const multiResult = multi(8, 3);

console.log(multiResult);
