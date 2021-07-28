'use strict'

//EJERCICIO 2
/*
Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.
*/

const buttonEl = document.querySelector('.js-button');
const textEl = document.querySelector('.js-text');
const inputEl = document.querySelector('.js-input')

const characterObject = {};

function handleClick(){
    textEl.innerHTML = ''
    const characterInput = inputEl.value;
    fetch(`https://swapi.dev/api/people/?search=${characterInput}`)
    .then(characterResponse => characterResponse.json())
    .then(characterData => {
        console.log(characterData.results);
        for(const character of characterData.results){
            // const character = characterData.results[2]
            console.log(character.gender);
            const nameCharacter = character.name;
            const genderCharacter = character.gender;
            console.log(nameCharacter);
           
                textEl.innerHTML += `<li>Personaje:${nameCharacter}, Género:${genderCharacter}</li>`;
           
        }
    });
}




buttonEl.addEventListener('click', handleClick)

