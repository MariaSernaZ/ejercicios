'use strict'

//EJERCICIO 3
/*Vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:
nombre
número de repositorios
avatar (imagen)*/

/*function getDogImage() {
  fetch("https://api.github.com/users/{username}")
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector(".js-img");
      img.src = data.message;
      img.alt = "Usuario de GitHub";
    });
}

function pintarUsuarios(pLista) {
  for (usuario of pLista) {
      seccionUsers.innerHTML += `<article>
          <h3>Nombre:${usuario.name}</h3>
          <ul>
              <img/>
              <li>Número de repositorios:${usuario.repo}</li>
          </ul>
      </article>`;
  }

const btn = document.querySelector(".js-button");
btn.addEventListener("click", getDogImage);*/


const url = "https://api.github.com/users/";
const nameUser = document.querySelector(".js-name");
const photo = document.querySelector(".js-img");
const repo = document.querySelector(".js-repo");


function getUser() {
  const username = document.querySelector('.js-user').value;

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.avatar_url;

      const repositories = document.querySelector('.js-info');
      repositories.innerHTML = `Este usuario ha publicado ${data.public_repos} repositorios.`;

      const name = document.querySelector('.js-name');
      name.innerHTML = data.name;
    });
}

const btn = document.querySelector('.js-btn-search');
btn.addEventListener('click', getUser);