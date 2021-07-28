'use strict'

//Ejemplo 3: reduce
/*
calcula la suma de un listado de números:
*/

/*
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
let result = 0;

for (let i = 0; i < scores.length; i++) {
  result += scores[i];
}

console.log(result);
}

console.log(longNames);
*/




//Ahora realizamos esto mismo usando reduce:
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

const result = scores.reduce((acc, number) => acc + number, 0);

console.log(result);

