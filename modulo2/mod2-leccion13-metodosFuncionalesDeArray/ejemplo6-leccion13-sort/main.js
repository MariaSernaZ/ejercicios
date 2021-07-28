'use strict'

//Ejemplo 6: sort


/*Por defecto sort ordena los elementos de un array alfabéticamente.*/
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

names.sort();
console.log(names);



//Ahora vamos a realizar este mismo ejemplo con find:
const users = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longName = users.find(user => user.length > 5);

console.log(longName);



//Ejemplo de la función de ordenación para ordenar nºs:
const times = [56, 9, 45, 28, 35];

times.sort((a, b) => a - b);
console.log(times);
