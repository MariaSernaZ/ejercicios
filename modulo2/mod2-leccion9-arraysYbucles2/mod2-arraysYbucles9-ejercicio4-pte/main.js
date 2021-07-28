'use strict'

//EJERCICIO 4: REPASO: Mi lista de tareas
/*Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
Mostrar una frase que indique cuántas tareas hay.
Pintar todas las tareas en pantalla.
Tachar las ya realizadas.
Permitir marcar una tarea como 'completa' o 'incompleta'.
Vamos a partir de este array de datos en nuestro fichero JavaScript:*/

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
  ];

/*Veamos cómo afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
    a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
    b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
    c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
      1. la tarea debe mostrarse como completada (tachada)
      2. debemos modificar su estado (propiedad completed) en el array tasks.*/

      const title = document.querySelector('.title');
      //const labelEl = document.querySelector('.js-label');
      const liElement = document.querySelector('.li');
      const checkEl = document.querySelector('.js-input');


    // La i empieza en 0 porque el índice de los arrays empieza en 0 también
    function checkTask(){
      for(let i=0; i<tasks.length; i++){
        checkEl.addEventListener('change', changeStatus);
        if(tasks.completed === true){
          liElement.classList.add('js-completed');
        } else {
          liElement.classList.remove('js-completed');
        }
      }
    }

    function changeStatus(){
      if (ev.target.checked) {
        ('js-completed');
      } else {
        ('js-completed');
      }
    }
    

    
    
    function handleClick(){
      checkTask();
      changeStatus();
    }

    checkEl.addEventListener('change', handleClick);

    /*d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberiamos actualizar esta información.*/

    title.innerHTML = "Tienes X tareas. Y completadas y Z por realizar";

    //function refreshInfo(){

    //}