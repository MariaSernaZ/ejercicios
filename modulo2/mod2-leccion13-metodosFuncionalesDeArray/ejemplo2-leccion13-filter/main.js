'use strict'

//Ejemplo 2: filter
/*
Partimos de un listado de nombres y queremos quedarnos solo con los que tienen más de 5 letras. Primero vamos a solucionarlo con un bucle:
*/

/*const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = [];

for (const name of names) {
  const nameLength = name.length; // ¡Sí, podemos usar .length con strings para saber su longitud!
  if (nameLength > 5) {
    longNames.push(name);
  }
}

console.log(longNames);*/




//Ahora realizamos esto mismo usando filter:
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names.filter(name => name.length > 5);

console.log(longNames);
