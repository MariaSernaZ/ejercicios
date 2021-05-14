'use strict'

//EJERCICIO 6: Crear una cesta de peras
/*Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:
    Número máximo de peras
    Número mínimo de peras
    Número actual de peras
    Número inicial de peras
Y varios métodos que hagan:
Añadir al cesto una pera
Sacar del cesto una pera
Restablecer el número de peras al valor inicial.
Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.*/

const basket  = {}
    basket.maxNum = 10;
    basket.minNum = 1;
    basket.currentNum = 9;
    basket.initialNum = 8;
    basket.add = function (){
        return this.currentNum + 1;
    }
    basket.remove = function (){
        return this.currentNum - 1;
    }
    basket.reset = function (){
        return this.remove = this.initialNum;
    }


console.log(basket.add());
console.log(basket.remove());
console.log(basket.reset());