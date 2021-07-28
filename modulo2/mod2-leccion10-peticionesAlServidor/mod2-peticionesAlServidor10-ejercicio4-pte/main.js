'use strict'

//EJERCICIO 4: Listado de repos de una organización en Github
/*Vamos a seguir explorando el API de GitHub explorando la parte del API para acceder a la info sobre organizaciones. La URL de este API es https://api.github.com/orgs/{orgname}, donde {orgname} es el nombre de la organización en GitHub. Por ejemplo, aquí tenéis la URL para obtener información de la organización Adalab https://api.github.com/orgs/Adalab. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
El objetivo de este ejercicio es mostrar en una web el listado completo de los repositorios de una organización que hay creados en GitHub. Por ejemplo, para Adalab, el resultado final debería ser similar a este:

Para ello vamos a hacer lo siguiente:
  1. Preparar un input con un botón para que la usuaria introduzca la organización.
  2. Cuando la usuaria pulse el botón buscar acceder a la información de la organización como primera petición al servidor.
  3. Recoger la información de la URL donde consultar la información de los repositorios de la organización en la respuesta del servidor (en la propiedad repos_url) y hacer una nueva petición a esa URL.
  4. En el último then pintar en nuestra web el nombre de todos los repositorios de la organización en una lista (propiedad name de cada objeto repositorio).
*/

function getRepo () {
  fetch('https://api.github.com/orgs/github/repos')
    .then(repoResponse => repoResponse.json())
    .then(reposData => {
      const repos = reposData.message;
      return fetch('https://api.github.com/orgs/github/repos'+ repos['']);
    })
    .then(nameResponse => nameResponse.json())
    .then(nameData => {
      const ul = document.querySelector('.js-list');
      ul.innerHTML += `<li></li>`
    });
}
const btn = document.querySelector('.js-button');
btn.addEventListener('click', getRepo);