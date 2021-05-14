'use strict';

//EJERCICIO 3: Completa las condiciones
//Prepara una variable cuyo valor será un número. Escribe las condiciones para el siguiente ejercicio y utilizando la variable haz pruebas para ver que estas se cumplen.


const numberFav = 15;

if (numberFav === 0) {
    console.log('El número es 0')
  } else if (numberFav < 0) {
    console.log('El número es negativo')
  } else if ((numberFav + 2) > 13 && (numberFav + 2) <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } else if (numberFav > 20 && numberFav < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }