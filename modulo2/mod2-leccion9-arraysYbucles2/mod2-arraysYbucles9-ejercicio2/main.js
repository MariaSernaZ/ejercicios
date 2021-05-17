'use strict'

//EJERCICIO 2: Sotiremun
/*Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.*/


const arr = [];
let num = 1;

function get100Numbers() {
    for (let i = 0; i < 100; i++) {
        arr.push(num);
        num++;
        //console.log(arr[i]);
    }
}


function getReversed100Numbers(){
    get100Numbers();
    console.log(arr.reverse());
}

getReversed100Numbers();