// 1. Welcome to the page + ask name. Also, information about all the flights uploaded.
// 2. Friendly information to the costumer (from/to/price/connection).
// 3. Average cost of today's flights.
// 4. List of flights that have connections.
// 5. Last 5 flights final destination.


// 1.
function welcome() {
    let userName = "";

    userName = prompt("Hi, welcome to Skylab Airlines! What's your name?");

    userName
        ? console.log(`Hello, ${userName}!`)
        : console.log("Hello!");

};

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

// 2.
function allFlights(x) {
    for (let i = 0; i < x.length; i++) {
        if (x[i].scale) {
            connection = "Flight with connection";
        } else {
            connection = "Direct flight";
        };
        console.log(
            `Flight from ${x[i].from} to ${x[i].to}, with a cost of: ${x[i].cost} dollars. ${connection}.`
        )
    }
};

// 3.
let sum = 0;
function averageCost(y) {
    for (let i = 0; i < y.length; i++) {
        sum += y[i].cost
    };
    let average = sum / y.length;

    console.log(`Today's flights average cost is ${average.toFixed(0)} dollars.`)

};

// 4.
function connectionFlights(z) {
    for (let i = 0; i < z.length; i++) {
        if (z[i].scale) {
            console.log(
                `Flight from ${z[i].from} to ${z[i].to}, with a cost of: ${z[i].cost} dollars.`
            );

        }
    }
};

// 5.
function lastFlights(w) {
    for (let i = 6; i < w.length; i++) {
        console.log(`${w[i].to}`);

    }
};

function airlines() {
    welcome()
    console.log("");/* this one is just to give an extra line and read it better*/
    allFlights(flights)
    console.log("");/* this one is just to give an extra line and read it better*/
    averageCost(flights)
    console.log("");/* this one is just to give an extra line and read it better*/
    console.log("List of flights with connection:")
    connectionFlights(flights)
    console.log("");/* this one is just to give an extra line and read it better*/
    console.log("Last 5 flights final destinations:")
    lastFlights(flights)
};

airlines();