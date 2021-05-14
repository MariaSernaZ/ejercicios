'use strict';

//EJERCICIO 4: Pares o nones
//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.
//Ejecutala e imprime el resultado para comprobar que funciona.

function oddEven(number) {
    if (number % 2 === 0){
        return "El número introducido es par."
    } else{
        return "El número introducido es impar."
    }  
}

let result = oddEven(3949);

console.log(result);
