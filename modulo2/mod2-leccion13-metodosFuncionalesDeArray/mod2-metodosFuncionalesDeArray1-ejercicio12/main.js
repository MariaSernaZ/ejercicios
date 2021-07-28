'use strict'

//EJERCICIO 12: Poniendo orden en nuestros usuarios

/*
Vamos a volver al listado de usuarios del ejercicio 6, porque nos ha dado la manía de tenerlos ordenados. ¿Podrías ordenarlos por orden alfabético? ¿Y por su número de PIN?
*/

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];


const users1 = users.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
})
console.log(users1);

/*const users2 = users.sort(function (a, b) {
  if (a.pin > b.pin) {
    return 1;
  }
  if (a.pin < b.pin) {
    return -1;
  }
  // a must be equal to b
  return 0;
})
console.log(users2);*/


