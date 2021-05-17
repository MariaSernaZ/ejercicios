'use strict'

//EJERCICIO 4: Scroll es de colores
//Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
//Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
//Preparar classes para cambiar el color de fondo del div.
//Escuchar el evento scroll sobre la ventana window.
//Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
//Nota: window.scrollY nos devuelve la posición del scroll vertical.

// elemento de HTML
const divElement = document.querySelector('.js-div');

// handler
function scroll() {
  let scroll = window.scrollY;
  
  if (scroll >= 250){
    divElement.classList.add("js-scroll1");
    divElement.classList.remove("js-scroll2");
  } else if(scroll < 250){
    divElement.classList.add("js-scroll2");
    divElement.classList.remove("js-scroll1");
  }
}

// listener sobre el elemento, con tipo de evento y handler
window.addEventListener('scroll', scroll);