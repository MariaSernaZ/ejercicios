'use strict'

//Ejemplo 5: find y findIndex


//vamos a solucionarlo con un bucle:
/*const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
let longName;

for (const name of names) {
  const nameLength = name.length;
  if (nameLength > 5 && longName === undefined) {
    longName = name;
  }
}

console.log(longName);*/



//Ahora vamos a realizar este mismo ejemplo con find:
const users = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longName = users.find(user => user.length > 5);

console.log(longName);



//Ahora vamos a ver un ejemplo con findIndex:
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const index = names.findIndex(name => name.length > 5);

console.log(index);