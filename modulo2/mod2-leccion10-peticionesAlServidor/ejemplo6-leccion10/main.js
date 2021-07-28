'use strict'

//Ejemplo 6 peticiones al servidor: XMLHttpRequest

let request;

function showPicture() {
  const response = JSON.parse(request.responseText).result;
  document.querySelector('.js-result').innerHTML = response;
}

function sendRequest () {
  request = new XMLHttpRequest();
  request.open('GET', 'https://api.rand.fun/games/rockpaperscissorslizardspock');
  request.addEventListener('load', showPicture);
  request.send();
}

document.querySelector('.js-emoji').addEventListener("click", sendRequest);