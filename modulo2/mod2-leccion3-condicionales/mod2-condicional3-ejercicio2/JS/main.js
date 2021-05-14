'use strict';

//EJERCICIO 2: Control de acceso
//En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
//Nota: cambia el valor de la variable y comprueba que todo funciona como esperas.



const namePair = "Bárbara";
const msj = document.querySelector(".js-wellcome");
if (namePair === "María" || namePair === "Bárbara") {
    msj.innerHTML += " " + namePair + "!";
    }
    else {
        msj.innerHTML = "Lo siento pero el usuario que has introducido no está registrado";
    }

