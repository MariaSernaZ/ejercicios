'use strict'

//EJERCICIO 1
/*
Vamos a explorar un API abierto de información sobre el mundo Star Wars (https://swapi.dev/). En esta página tenemos la documentación completa del API y un formulario que nos permite hacer peticiones a la URL que indiquemos. Identifica la siguiente información sobre SWAPI:
1- la URL base del API --> https://swapi.dev/api/
2- si necesita autenticación --> es pública (open API)
3- método HTTP que deben usar las peticiones a este API --> GET
4- URL para acceder a la info del personaje "Luke Skywalker" --> https://swapi.dev/api/people/:id/
5- URL para acceder a la info de la película "A New Hope" --> https://swapi.dev/api/films/:id/
6- a qué otros recursos puedo acceder desde el API además de personajes y pelis: 
"planets": "https://swapi.dev/api/planets/", 
"species": "https://swapi.dev/api/species/", 
"starships": "https://swapi.dev/api/starships/",
"vehicles":"https://swapi.dev/api/vehicles/"
7- URL para acceder al listado de personajes, ¿está paginada? --> http https://swapi.dev/api/people/
8- cómo puedo buscar personajes mediante la URL
9- cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee --> append ?format=wookiee to your urls. Ej: https://swapi.dev/api/planets/1/?format=wookiee
*/

