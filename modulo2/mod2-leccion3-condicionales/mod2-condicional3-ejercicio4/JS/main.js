'use strict';

//EJERCICIO 4: Conversor de edad de perro a humano
//Te habrá pasado varias veces de ir por la calle y que alguien te pregunte "perdona, tienes a mano un conversor de edad de perros a humanos" y tener que contestar con vergüenza que no y que esa persona te mire raro... ¡hasta ahora! Vamos a crearla para evitar esto que pasa tan a menudo. Para ello, las reglas son las siguientes:
//El primer año de un perro equivale a 15 años de humano
//El segundo año de un perro equivale a nueve años de humano
//A partir del tercero, cada año de perro equivale a 5 años de humano.
//Nota: Prueba que el código funciona correctamente con distintos años (1, 2, 12...). Imagina el alcance de los daños si la próxima vez que te pare una persona para preguntarte por el conversor... ¡no funciona correctamente!

const dogAge1 = 15;
const dogAge2 = 9;
const dogAge3 = 5;
const sumDog3Years = dogAge1 + dogAge2 + dogAge3;


let humanAge = 2;

if (humanAge === 1){
  console.log('El perro tiene '+ dogAge1 + ' años, que equivale a '+ humanAge + ' año humano.')
} else if (humanAge === 2){
  console.log('El perro tiene '+ (dogAge1 + dogAge2) + ' años que, equivale a '+ humanAge + ' años humanos.')
} else if (humanAge === 3){
  console.log('El perro tiene '+ (sumDog3Years) + ' años, que equivale a '+ humanAge + ' años humanos.')
} else if (humanAge > 3){
  console.log('El perro tiene '+ ((sumDog3Years) + ((humanAge-3) * dogAge3)) + ' años, que equivale a '+ humanAge + ' años humanos.')
}


//Opción 2
/*const dogAge = 4;
let humanAge = 0;

if (dogAge === 1){
    humanAge=15;
    console.log('El perro tiene '+ dogAge+ ' año perruno que equivale a '+ humanAge+ ' años humanos.');
}else if (dogAge === 2){
    humanAge=24;
    console.log('El perro tiene '+ dogAge+ ' años perrunos que equivalen a '+ humanAge+ ' años humanos.');
}else if (dogAge >= 3){
    humanAge = 24 + (dogAge-2) * 5; 
    console.log('El perro tiene '+ dogAge+ ' años perrunos que equivalen a '+ humanAge+ ' años humanos.');
}*/