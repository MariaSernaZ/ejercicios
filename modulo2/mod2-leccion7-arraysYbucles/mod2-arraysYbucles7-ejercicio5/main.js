'use strict'

//EJERCICIO 5: La media
/*a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.
c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.*/

const scores = [4, 8, 7, 3, 9];
scores[5]= 7;

// Creamos una variable fuera del bucle para que no se sobrescriba en cada iteración
// En esta variable iremos sumando cada una de las puntuaciones
let acc = 0;

// La i empieza en 0 porque el índice de los arrays empieza en 0 también
for (let i = 0; i < scores.length; i++) {
  acc += scores[i];
  // Sumamos a `acc` el valor actual del array en cada iteración del bucle
  // acc += arr[i] es igual a acc = acc + arr[i]
}

console.log('La suma total es ' + acc);

//Recogemos el valor de la suma
let sum = acc;

//Calculamos la media
let average = sum/scores.length;

console.log('La puntuación media final es ' + average);


//Duda con 
function averageFunct(){
  for (let i = 0; i < scores.length; i++) {
    acc += scores[i]/scores.length;
  }
}

console.log(averageFunct(scores));