'use strict'

//EJERCICIO 4: Previsión para ver la Luna del cazador
/*Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.
NOTA: Vamos a realizar este ejercicio de forma que, antes de programar nada, escribamos el un papel el listado de las acciones (algoritmo) que tenemos que realizar para conseguir el resultado que buscamos. Una vez escrito este listado, ya nos pondremos a programarlo en JS.*/

//1. El año inicial será 2017 --> lo recogeremos en una constante
//2. Calcular las próximas 15 lunas con un bucle
//3. Se produce cada 3 años --> tendremos que ir sumando repetidamente esa cantidad
//4. Obtener el resultado con los años de las siguientes 15 lunas

let moon = 2017;

for (let i=0; i <= 15; i++) {
    moon +=3;
    console.log("La próxima 'Luna del cazador' será en:" + moon);
  }

//Nota: si ponemos console.log fuera del bucle, nos recogerá únicamente el último año. Sin embargo, si lo incluimos dentro del bucle, nos indicará cada uno de los años