'use strict';

//EJERCICIO 10: Calculador de modelo de caja
//Como hemos visto en las clases anteriores, en CSS tenemos 2 tipos de cálculo para las dimensiones de un elemento: border-box y content-box. Vamos a realizar un calculador al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.
//La función tendrá 4 parámetros:
    /*el primero será un booleano para especificar si es border-box o no.
    el segundo será un número con el width de la caja.
    el tercero será un número con el padding.
    el cuarto será un número con el border-size.*/
//Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.

function calc(type, width, padding, border){

    if (type === "border-box"){
        const sizeBorderBox = width;
        console.log("El ancho del contenido es:" + width + "px y el ancho total de la caja es:" + sizeBorderBox + "px");

    } else if (type === "content-box"){
        const sizeContentBox = width + (padding + border) * 2;
        console.log("El ancho del contenido es:" + width + "px y el ancho total de la caja es:" + sizeContentBox + "px");
    }

}

const boxSize1 = calc("border-box", 30, 10, 2);
const boxSize2 = calc("content-box", 30, 10, 2);

