'use strict'

//Ejemplo 1: map
/*
Partimos de un array con nombres names y queremos obtener otro array con los nombres en mayúscula capitalNames:
*/

/*const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const capitalNames = [];

for (let i = 0; i < names.length; i++) {
  const capitalName = names[i].toUpperCase();
  capitalNames.push(capitalName);
}

console.log(capitalNames);*/



//Ahora realizamos esto mismo usando map:
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const capitalNames = names.map(name => name.toUpperCase());

console.log(capitalNames);