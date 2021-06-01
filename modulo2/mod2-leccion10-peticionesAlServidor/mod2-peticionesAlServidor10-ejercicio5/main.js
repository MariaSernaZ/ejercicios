'use strict'

//EJERCICIO 5
/*Vamos a entrar en la URL https://api.github.com/orgs/Adalab a través de nuestro navegador para obtener la respuesta del API de GitHub. A continuación vamos a analizar de qué tipo es cada una de las propiedades que nos está devolviendo. Por ejemplo, de qué tipo son login, id, node_id, is_verified...
Y si entramos en https://dog.ceo/api/breeds/list ¿de qué tipo es la propiedad message?*/


//https://api.github.com/orgs/Adalab:

/*
{
  "login": "Adalab",
  "id": 22891503,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyODkxNTAz",
  "url": "https://api.github.com/orgs/Adalab",
  "repos_url": "https://api.github.com/orgs/Adalab/repos",
  "events_url": "https://api.github.com/orgs/Adalab/events",
  "hooks_url": "https://api.github.com/orgs/Adalab/hooks",
  "issues_url": "https://api.github.com/orgs/Adalab/issues",
  "members_url": "https://api.github.com/orgs/Adalab/members{/member}",
  "public_members_url": "https://api.github.com/orgs/Adalab/public_members{/member}",
  "avatar_url": "https://avatars.githubusercontent.com/u/22891503?v=4",
  "description": "",
  "name": "Adalab",
  "company": null,
  "blog": "https://adalab.es",
  "location": null,
  "email": "admin@adalab.es",
  "twitter_username": "Adalab_Digital",
  "is_verified": false,
  "has_organization_projects": true,
  "has_repository_projects": true,
  "public_repos": 516,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "html_url": "https://github.com/Adalab",
  "created_at": "2016-10-17T15:24:18Z",
  "updated_at": "2020-07-06T10:51:23Z",
  "type": "Organization"
}
*/


//https://dog.ceo/api/breeds/list:
/*
{"message":["affenpinscher","african","airedale","akita","appenzeller","australian","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","buhund","bulldog","bullterrier","cairn","cattledog","chihuahua","chow","clumber","cockapoo","collie","coonhound","corgi","cotondetulear","dachshund","dalmatian","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","finnish","frise","germanshepherd","greyhound","groenendael","havanese","hound","husky","keeshond","kelpie","komondor","kuvasz","labradoodle","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mix","mountain","newfoundland","otterhound","ovcharka","papillon","pekinese","pembroke","pinscher","pitbull","pointer","pomeranian","poodle","pug","puggle","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","vizsla","waterdog","weimaraner","whippet","wolfhound"],"status":"success"} 
*/