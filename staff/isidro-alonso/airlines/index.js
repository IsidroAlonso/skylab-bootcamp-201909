// product placement airlines
/* Enunciado:
Programa una interfaz de usuario para una aerolínea (por terminal...).
Esta aerolínea dispondrá de 10 vuelos para el dia de hoy, para empezar, 
estos vuelos deben estar declarados de manera global, cuando se llame a la función:
Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: 
El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuántos vuelos efectúan escalas.
Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) 
son los últimos del día, muestra al usuario sus destinos.
*/

// Nombre user
function welcome(whoAreYou) {
    whoAreYou = prompt(`Bienvenido a SkyLab Airlines, ¿quien eres?`);
    if (whoAreYou !== null && whoAreYou !== ``) {
        return alert(`¡Bienvenido, ${whoAreYou}!`);
    }
    return alert(`¡Bienvenido!`);
};

welcome();

const flights = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

// Lista de vuelos
function flightList() {
    flights.forEach(({from, to, cost, scale}) => {
        const list = `El vuelo con origen: ${from}, y destino: ${to} tiene un coste de ${cost}€ `;
        const scaleList = scale ? `con escala.` : `y no realiza ninguna escala.`;
        console.log(list + scaleList);
    });
}
  
flightList(); // muestra la lista de vuelos completa de forma amigable

// Solo muestra los vuelos con escala
function scaleList() {
    flights.forEach(({from, to, cost, scale}) => {
        if (scale) {
        console.log(`El vuelo con origen: ${from}, y destino: ${to} tiene un coste de ${cost}€ con escala.`);
        }
    });
}
  
scaleList(); // solo aparece la lista amigable de los vuelos con escala (4 de 11)

// Coste medio vuelos // suma precios = 6650 // promedio = 604.5454...
function mediumCost() {
    const flightPrice = flights.map(costList => {
        return costList.cost;
    });
    const totalFlightPrice = flightPrice.reduce((accumulatedPrice, actualPrice) => {
        return accumulatedPrice + actualPrice;
    });
    console.log((totalFlightPrice / flights.length).toFixed(2));
};

mediumCost();

// Mostrar los destinos de los últimos 5 vuelos
function finalDestinations(lastDestinations) {
    lastDestinations = 5;
    console.log(`Últimos vuelos a: `);
    const lastFlights = flights.length - lastDestinations - 1;
    flights.forEach((eachFlight, index) => {
        if (index > lastFlights) {
            console.log(eachFlight.to);
        }
    });
}
  
finalDestinations();

// versión slice sugerida por mi compañero en github
function finDest() {
    console.log(flights.slice(6,11));
}

finDest();