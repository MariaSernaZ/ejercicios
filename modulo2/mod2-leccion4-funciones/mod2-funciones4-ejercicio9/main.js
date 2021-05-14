'use strict';

//EJERCICIO 9: Arrow functions everywhere
//Vamos a rehacer alguno de los ejercicios anteriores con funciones flecha. ¡A lo loco!

//Ejercicio 2

function average(a, b, c, d) {
    const result = (a + b + c + d) / 4;
  
    return result;
}
  
const averageResult = average(1, 3, 4, 8);

console.log(averageResult);


// Ejercicio 2 con función flecha

const average2 = (a, b, c, d) => {
    return (a + b + c + d) / 4;
};

console.log(average2(4,8,23,45));


//Ejercicio 2 con llaves y return implícito

const average3 = (a, b, c, d) => (a + b + c + d) / 4;


console.log(average3(7,34,3,9));