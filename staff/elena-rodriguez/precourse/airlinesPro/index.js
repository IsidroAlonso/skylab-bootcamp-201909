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


function printNice (flights) { 
    console.log('Estos son los vuelos para hoy: ')
    for (let op = 0; op < flights.length; op++) {
        if(flights[op].scale === false) {
        console.log('Id: ' + flights[op].id + '.El vuelo con origen: ' + flights[op].from + ' y con destino: ' + flights[op].to + 
        ' tiene un coste de ' + flights[op].cost + '€, y no realiza ninguna escala.')}
        else {console.log('Id: ' + flights[op].id + '.El vuelo con origen: ' + flights[op].from + ' y con destino: ' + flights[op].to + 
        ' tiene un coste de ' + flights[op].cost + '€, y realiza una escala.')}
    }
}

function averageCost(flights) {
    var resultAdd = 0; 
    for (let op = 0; op < flights.length; op++) {
        resultAdd += flights[op].cost;
    }
    resultAdd = resultAdd / flights.length;
    resultAdd = resultAdd.toFixed(2);
    console.log('El coste medio de los vuelos es de: ' + resultAdd + '€');
}

function vuelosEscalas(flights){

console.log('Vuelos con escala:');
for (let op = 0; op < flights.length; op ++) {
    if (flights[op].scale === true) {
        console.log('Origen: ' + flights[op].from + '; Destino: ' + flights[op].to + '; Precio: ' + flights[op].cost + '€.')
    }
}
}

function lastFlights(flights) {
console.log('Últimos vuelos del día: ')
var lastFlights = flights.slice(-5)
for (let op = 0; op < lastFlights.length; op++) {
    console.log('Vuelo con origen: ' + lastFlights[op].from + ' y con destino: ' + lastFlights[op].to)}
}


function airlinesInfo (flights) {
var userName = prompt('User name?');
console.log('Bienvenido/a, ' + userName + '!');

printNice(flights);
averageCost(flights);
vuelosEscalas(flights);
lastFlights(flights);
}

airlinesInfo (flights)


function precioMenor(flights) {

    var question3 = prompt('Introduce el importe');
    var realImporte = Number(question3);
    var contador = 0; 
    console.log('Estos son los buenos con precio menor a ' + realImporte + '€:');
    for (let op = 0; op < flights.length; op++) {
        if (flights[op].cost < realImporte) {
        console.log(flights[op])
        contador = contador + 1
        }
    }
    if (contador === 0) {alert('No se han encontrado vuelos');}
 
}

function precioMayor(flights) {

    var question3 = prompt('Introduce el importe');
    var realImporte = Number(question3);
    var contador = 0; 
    
    for (let op = 0; op < flights.length; op++) {
        if (flights[op].cost > realImporte) {
            console.log(flights[op])
            contador = contador + 1
        }
    
    }
    if (contador === 0) {alert('No se han encontrado vuelos')}
}

function precioIgual(flights) {
    var question3 = prompt('Introduce el precio del vuelo');
    var realCost = Number(question3);
    var contador = 0; 
    for (let op = 0; op < flights.length; op++) {
            if (flights[op].cost === realCost) {
                console.log(flights[op])
                contador = contador + 1
            }
        
    }
    if (contador === 0) {alert('No se han encontrado vuelos')}
}


function comprarVuelos(flights) {
var contador = 0;
var buyFlight = prompt('Introduce el id del vuelo que deseas comprar');
var numberFlight = Number(buyFlight)
for (let op = 0; op < flights.length; op ++) {
    if (flights[op].id === numberFlight) {
        console.log('Felicidades! Has comprado billetes para el vuelo con destino: ' + flights[op].to + ' y origen: ' + flights[op].from + ', con precio: ' + flights[op].cost + '€');
        contador = contador + 1;
    }
}
if (contador === 0) {console.log('Vuelo no encontrado')}
}

function createFlights(flights) {
    do {
    var newFlight = {};
    newFlight.id = flights.length
    var where = prompt('Destination?');
    newFlight.to = where
    var origin = prompt('Origin?');
    newFlight.from = origin
    var money = prompt('Cost?');
    money = Number(money);
    newFlight.cost = money
    var scale = prompt('Scale? y/n')
        if (scale === 'y') {scale = true}
        else {scale = false}
    newFlight.scale = scale 
    flights.push(newFlight);

   var askForMore = prompt('Another one? y/n')
    } while (askForMore === 'y' && flights.length < 15);
    if (askForMore === 'n') {return flights}
    else if (askForMore !== 'n' && askForMore !== 'y') {
        alert('not valid answer');
        }
        if (flights.length === 15) {
            alert('Not more than 15 flights alowed!');
            return flights;
        }
    
}    

function deleteFlights(flights) {
var askId = prompt ('Introduce the id of the flight to delete')
var numId = Number(askId)
for (let op = 0; op < flights.length ; op ++) {
        if (numId > 15) {
            alert('No flights with that id!')
            moreDelete = prompt ('Delete more? y/n')
            while (moreDelete === 'y') {deleteFlights(flights)}
            return flights;
        }
    
        else if (numId === flights[op].id) {
        {flights.splice(op,1);
        moreDelete = prompt ('Delete more? y/n')}
        while (moreDelete === 'y') {deleteFlights(flights)}
        return flights;
        }  
    }
}


function user(flights) {
    var question2 = prompt('Busca vuelos con importe más bajo a... , introduce: 1/ Busca vuelos con importe más alto a... introduce: 2 / Para buscar un vuelo por precio exacto, introduce: 3')
    if (question2 === '1') {
    precioMenor(flights)
    comprarVuelos(flights)}
    else if (question2 === '2') {
    precioMayor(flights)
    comprarVuelos(flights)}
    else if (question2 === '3') {
    precioIgual(flights)
    comprarVuelos(flights)}
}
    
function admin(flights) {
    var question1 = prompt('Crear vuelos o eliminar?');
    if (question1 === 'crear') {createFlights(flights)}
    else if (question1 === 'eliminar') {deleteFlights(flights)}
    console.log(flights)
}



function skylabAirlines (flights) {

    var userAdmin = prompt('Are you user or admin?');
    if (userAdmin === 'admin') {admin(flights)}
    else if (userAdmin === 'user') {user(flights)}
    else {alert('Introduce a valid answer!')}
    }

skylabAirlines(flights)








        








