'use strict'

//EJERCICIO 9: Favoritos
//Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
//Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
//Modificar el texto del div .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.
//Nota: con querySelector buscamos un elemento dentro de otro. Hasta ahora lo habíamos usado para buscar dentro de document (todo nuestro documento HTML), con document.querySelector().
//Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement en la que hemos guardado un elemento de HTML, podríamos buscar dentro él otro elemento, tal que así sectionAboutElement.querySelector().


// elemento de HTML
const isra = document.querySelector('.teacher--isra');
const barlos = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');


// handler
function teacherClick (event) {
  const selectLi = event.currentTarget;

  selectLi.classList.toggle("teacher--selected"); //añade y quita la clase

  if (event.currentTarget.querySelector(".favorite").innerHTML === "Añadir"){
    let changeAdd = selectLi.querySelector(".favorite").innerHTML.replace("Añadir", "Quitar");
    selectLi.querySelector(".favorite").innerHTML = changeAdd;

  } else if (event.currentTarget.querySelector(".favorite").innerHTML === "Quitar"){
    let changeRemove =  selectLi.querySelector(".favorite").innerHTML.replace("Quitar", "Añadir");
    selectLi.querySelector(".favorite").innerHTML = changeRemove;
  }
}

// listener sobre el elemento, con tipo de evento y handler
isra.addEventListener('click', teacherClick);
barlos.addEventListener('click', teacherClick);
nasi.addEventListener('click', teacherClick);