'use strict';

//EJERCICIO 7: Combinando funciones
//Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones getEl y la que comprueba si un número es par o impar (ejercicios 5 y 4).
//Sin modificar estas dos funciones, vamos a hacer lo siguiente:
    //usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
    //convertimos ese valor a número y lo asignamos a una constante
    //usamos nuestra función del ejercicio 4 para saber si es par o impar
    //escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'


//Ejercicio 5

function getEl(select){
    const element = document.querySelector(select);

    return element;
}

const numSelect = getEl(".text").innerHTML;
console.log(numSelect);


//Ejercicio 4

function oddEven(number) {
    if (number % 2 === 0){
        return "El número introducido es par."
    } else{
        return "El número introducido es impar."
    }  
}
    
let result = oddEven(numSelect);
console.log(result);