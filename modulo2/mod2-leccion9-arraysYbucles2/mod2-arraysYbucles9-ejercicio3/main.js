'use strict'

//EJERCICIO 3: The numbers
/*Vamos a crear una función bestLostNomber que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba. La función, debe seguir estos pasos:
    1. Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.
    2. Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.
    3. Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.
Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.*/


const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNum = [];
const mult3 = [];

//La i empieza en 0 porque el índice de los arrays empieza en 0 también
function bestLostNomber(){
    for (let i = 0; i < lostNumbers.length; i++) {
        if(lostNumbers[i] % 2 === 0){
            evenNum.push(lostNumbers[i]);
        } else if (lostNumbers[i] % 3 === 0) {
            mult3.push(lostNumbers[i]);
        }
    }
}

bestLostNomber();

console.log(evenNum);
console.log(mult3);

const result = evenNum.concat(mult3);
console.log(result);