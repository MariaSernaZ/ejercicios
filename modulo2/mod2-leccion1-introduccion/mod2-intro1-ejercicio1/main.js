'use strict'

//EJERCICIO 1: mensaje de navegador obsoleto
//En este ejercicio vamos a crear un código que muestre un título con el mensaje "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente". Para ello utilizaremos document.querySelector('h1').innerHTML.

const title= document.querySelector(".title")
title.innerHTML= "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

