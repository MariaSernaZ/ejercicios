'use strict'

//EJERCICIO 7: A story of adalabers
/*Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:
María, 29 años, diseñadora
Lucía, 31 años, ingeniera química
Susana, 34 años, periodista
Rocío, 25 años, actriz
Inmaculada, 21 años, diseñadora
En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.
*/

const adalabers = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora',
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química',
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista',
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz',
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora',
    }
];

/*Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.

Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. Y probad que las funciones siguen devolviendo el valor correcto.*/

//función countAdalabers que devuelve el número de adalabers en el listado.

function countAdalabers(adalabers){
    const totalAda = adalabers.length;
    console.log(`Hay ${totalAda} adalabers en la clase`);
}

//función averageAge que devuelve la media de edad de listado.

function averageAge(){
    let age = [];
    let sum = 0;

    for(let i=0; i<adalabers.length; i++){
        age[i] = adalabers[i].age;   
        sum += age[i];
    }

    const average = sum/adalabers.length;
    console.log (`La media de edad de las adalabers es de ${average} años`);
}

//función theYoungest que devuelve el nombre de la adalaber más joven. 
//Existen las funciones Math.min() y Math.max()

function theYoungest(){
    let youngest = adalabers[0].age; 
    let nameYoungest = adalabers[0].name;

    //edad youngest
    for(let i=0; i<adalabers.length; i++){
        if(adalabers[i].age < youngest){    //preguntamos si el próximo elemento de nuestro array (posición i) es menor que youngest
            youngest = adalabers[i].age;    //si se cumple la condición, reemplazamos el valor de youngest por el valor de nuestro array en la posicion i 
        } 
    }

    //nombre youngest
    for (let i = 0; i<adalabers.length;i++){
        if (adalabers[i].age === youngest) {
            nameYoungest = adalabers[i].name;
        }
    }
        
    console.log(`La adalaber más joven es: ${nameYoungest} que tiene ${youngest} años.`);
}


//función theOldest que devuelve el nombre de la adalaber mayor

function theOldest(){
    let oldest = adalabers[0].age; 
    let nameOldest = adalabers[0].name;

    //edad oldest
    for(let i=0; i<adalabers.length; i++){
        if(adalabers[i].age > oldest){
            oldest = adalabers[i].age;
        } 
    }

    //nombre oldest
    for (let i = 0; i<adalabers.length;i++){
        if (adalabers[i].age === oldest) {
            nameOldest = adalabers[i].name;
        }
    }
    
    console.log(`La adalaber más joven es: ${nameOldest} que tiene ${oldest} años.`);
}


//función countDesigners que devuelve el número de adalabers que son diseñadoras.

function countDesigners(){
    let numDesigner = 0;

    for(let i = 0; i<adalabers.length;i++){
        if(adalabers[i].job === 'diseñadora'){
            numDesigner++
        }
    }

    console.log(`Hay ${numDesigner} adalabers diseñadoras`);
}



countAdalabers(adalabers);
averageAge(adalabers);
theYoungest(adalabers);
theOldest(adalabers);
countDesigners(adalabers);

