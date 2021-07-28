'use strict'

//EJERCICIO 3: Autocompletado
/*
Vamos a crear nuestro propio autocompletado de formularios. Para ello vamos a crear un formulario con tres campos:
    Nombre
    Apellidos
    Teléfono
Por otro lado, en JS tendremos un array de 3 objetos con esa estructura. Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono. Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre. Al seleccionarlo se rellenará el formulario automáticamente.
*/

const form = document.querySelector('.js-form');

const users = [
    {
        nombre: 'María',
        apellido: 'Serna',
        teléfono: '664575678'
    },
    {
        nombre: 'Ana',
        apellido: 'Serna',
        teléfono: '645467458'
    },
    {
        nombre: 'Valentín',
        apellido: 'Peñarrubia',
        teléfono: '244645776'
    }
];








