/*  
Proceso 1
  1.- Cuando arranque la pag debo pintar el listado de tareas
  2.- Escuchar un evento sobre las tareas pintadas

Proceso 2
  2.- Una vez que la usuaria ha clickado
    2-1 recoger en cual elemento ha hecho click
    2-2 Modificar los datos( Estado de la tarea)
    2-3 Volver a pintar mis tareas
    2-4 escuchar evento
*/
const ulElement = document.querySelector(".js-list");
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

function paintTasks(){
    let html= "";
    let className = "";
    let checked = "";
    for(let i= 0; i < tasks.length; i++){
        let task = tasks[i];
        if(task.completed === true){
            className = "crossout";
            checked = "checked";
        }
        else{
            className= "";
            checked= "";
        }
        html += `<li class = "${className}"> `
        html += `<input class ="js-checkbox" type="checkbox" value="${i}"  ${checked}/>`;
        html += `${task.name} </li>`;
    }
    ulElement.innerHTML = html;
    listenClick();
;}
function listenClick (){
    const checkboxElements = document.querySelectorAll(".js-checkbox");
    for( let i = 0; i < checkboxElements.length; i++){
        checkboxElements[i].addEventListener("change",handlerCheck)
    }
}
function handlerCheck(evt){
    console.log(evt.target.value);
    const clicked = evt.target.value;
    tasks[clicked].completed = !tasks[clicked].completed;
    console.log(tasks);
    paintTasks();
}
paintTasks();