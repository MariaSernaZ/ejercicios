'use strict'

//EJERCICIO 12: Un listener para todos
/*Vamos a refactorizar el EJERCICIO 9 para mejorarlo. Tenemos que quitar ese mogollón de listeners en los lis, reemplazarlos por uno solo en la etiqueta madre (ul) y trabajar con event.target.
¡A por ello!
Nota: esta técnica de poner un listener en la madre y acceder a la hija sobre la que se ha hecho click se llama event delegation.*/


// elemento de HTML (<ul>)
const ulEl = document.querySelector('.teachers');


function listenLi(){
  const listElements = document.querySelectorAll('.teacher');

  for (const listElement of listElements) {
      listElement.addEventListener("click", handleClickLi);//estamos escuchando li
  } 
}


function handleClickLi(event){
  console.log(event.target.innerHTML)//utilizamos event para saber info del evento y target del elemento clickado
}


function changeClass() {

  listElement.classList.toggle("teacher--selected"); //añade y quita la clase

  if (event.target.querySelector(".favorite").innerHTML === "Añadir"){
    let changeAdd = selectLi.querySelector(".favorite").innerHTML.replace("Añadir", "Quitar");
    selectLi.querySelector(".favorite").innerHTML = changeAdd;

  } else if (event.currentTarget.querySelector(".favorite").innerHTML === "Quitar"){
    let changeRemove =  selectLi.querySelector(".favorite").innerHTML.replace("Quitar", "Añadir");
    selectLi.querySelector(".favorite").innerHTML = changeRemove;
  }
}



// handler
function teacherClick () {
  listenLi();
  changeClass();
}

// listener sobre el elemento, con tipo de evento y handler
/*isra.addEventListener('click', teacherClick);
barlos.addEventListener('click', teacherClick);
nasi.addEventListener('click', teacherClick);*/