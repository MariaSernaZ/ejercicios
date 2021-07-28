'use strict'

//Ejemplo 4: encadenar map y filter

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names.filter(name => name.length > 5).map(name => name.toUpperCase());

console.log(longNames);

