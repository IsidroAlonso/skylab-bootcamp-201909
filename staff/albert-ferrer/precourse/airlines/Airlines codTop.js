/* 

1- Se preguntará por el nombre de usuario y dará la bienvenida.

2- El usuario visualizará todos los vuelos disponibles de una forma amigable: 
El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y 
no realiza ninguna escala.

3- A continuación, el usuario verá el coste medio de los vuelos.

4- También podrá ver cuántos vuelos efectúan escalas.

5- Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, 
   muestra al usuario sus destinos.
*/

var flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];


function wellcome() {    

    let name = prompt('Por favor introduce tu nombre: ');

        console.log(`Bienvenido ${name} a Skylab Airlines.`);
    
}

wellcome();

function allFlights(x) {

    for (let i= 0; i < x.length; i++){

        if(x[i].scale) {

            direct= 'con una o más escalas. ';
        } else {

            direct= 'sin escalas. ';
        }
        console.log(`Vuelos a ${x[i].to} procedente de ${x[i].from} con un coste de ${x[i].cost} ${direct} `);
    }

}
allFlights(flights);

function averageCost(y) {

    let sum= 0;

    let average= 0;

    for (let i= 0; i < y.length; i++){

        sum += y[i].cost;

        average= parseFloat(sum/11).toFixed(2);
    }

    console.log(`El coste medio de los billetes es de : ${average}`);
}

averageCost(flights);

function indirectFlights(z){

    console.log('Los siguientes vuelos hacen escala: ');

    let makeScale= z.filter(function(el) {

        return (el.scale === true);
    });

    makeScale.forEach(function(el){

        console.log(`Vuelo a ${el.to}. `);

    });

}

indirectFlights(flights);

function todayFlights(a) {

    console.log('Los siguientes vuelos salen hoy: ');

    let dayFlights= a.filter(function(el){

        return (el.id > 6 && el.id < 12);
    })

    dayFlights.forEach(function(id){

        console.log(`Vuelo a ${id.to}`);

    });
}

todayFlights(flights);