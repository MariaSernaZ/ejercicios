'use strict'

//EJERCICIO 1: 1, 2, 3, lo hacemos otra vez
/*
Crear una página HTML con una lista ul vacía. Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3]. Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array. Usaremos los métodos avanzados para manipular el DOM, no innerHTML.
*/


//OPCIÓN FOR

const arrNum = [1, 2, 3];
const listEl = document.querySelector('.js-list');

function createLi(){

    for (let i= 0; i<arrNum.length; i++){
        // Creamos un elemento nuevo, un <li>
        const newItem = document.createElement('li');
        // Ahora creamos algo de contenido
        const newContent = document.createTextNode(`${arrNum[i]}`);
        console.log(arrNum[i])
        // Y se lo añadimos a nuestro <li>
        newItem.appendChild(newContent);

        //Añadimos elementos al DOM
        listEl.appendChild(newItem);
    }
}

createLi();


//OPCIÓN FOR OF

const numbers = [1, 2, 3];
const items = document.querySelector(".list");

const funct = () => {
  for (const itemContent of numbers) {
    //itemContent contiene todo el vaor del [i]
    const item = document.createElement("li"); //elemento que va a contener el array
    const numb = document.createTextNode(itemContent); //nuevo contenido del array
    item.appendChild(numb);
    items.appendChild(item);

    console.log(numb);
  }
};

funct();