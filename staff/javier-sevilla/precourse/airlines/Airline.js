// Declaraciones variables globales y funciones
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

let user = '';
let noFin = true;
let noFinUser = true;

function mostrarVuelos(arr) {
    logFinal = "";
    let i = 0;
    let escala = "";

    console.log("------  VUELOS HOY ------");    
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i].scale) {
            escala = "y si realiza escala";
        } else {
            escala = "y no realiza ninguna escala";
        }
        logFinal = "El vuelo con origen: " +
                    arr[i].to +
                  ", y destino: " +
                   arr[i].from + 
                   " tiene un coste de: " +
                   arr[i].cost +
                   "€ " +
                   escala;
        console.log(logFinal);
    }   
}

function costeMedioVuelos(arr) {
    let i = 0;
    let costeTotal = 0;
    let costeMedio = 0;
    
    for (i = 0; i < arr.length; i++) {
        costeTotal += arr[i].cost;
    } 
    costeMedio = parseFloat(costeTotal / i).toFixed(2);
    console.log("");
    console.log("");
    console.log("------  COSTE MEDIO VUELOS HOY  ------");
    console.log("El coste medio de los vuelos de hoy es de: " + costeMedio + "€");
}

function vuelosConEscala(arr) {
    logFinal = "";
    let i = 0;

    console.log("");
    console.log("");
    console.log("------  LOS SIGUIENTES VUELOS TIENEN ESCALA  ------");
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i].scale) {
            logFinal = "El vuelo con origen: " +
                       arr[i].to +
                       ", destino: " +
                       arr[i].from + 
                       " y con un coste de: " +
                       arr[i].cost +
                       " TIENE ESCALA";
           console.log(logFinal);       
        }

    } 
}

function ultimosCinco(arr) {
    let i = 0;
    let j = arr.length - 5;
    let logFinal = "";
    let escala = "";

    console.log("");
    console.log("");
    console.log("------  LOS 5 ÚLTIMOS VUELOS SON  ------");

    for (i = j; i < arr.length; i++) {
        if (arr[i].scale) {
            escala = "y si realiza escala";
        } else {
            escala = "y no realiza ninguna escala";
        }
        logFinal = "El vuelo con origen: " +
                    arr[i].to +
                  ", y destino: " +
                   arr[i].from + 
                   " tiene un coste de: " +
                   arr[i].cost +
                   "€ " +
                   escala;
        console.log(logFinal);           
    } 
}

//Empezmos proceso

//Pedimos usuario y le damos la bienvenida
do {

   do {
      user = prompt('INTRODUZCA EL USUARIO');
      if (user != "") {
         noFinUser = false;
         alert('Bienvenido Sr ' + user + ' a Skylab Airlines.');
      }

    } while (noFinUser); 
 
    // mostramos todos los vuelos
    mostrarVuelos(flights);
    // mostramos coste medio
    costeMedioVuelos(flights);
    // mostramos vuelos con escala
    vuelosConEscala(flights);
    // mostramos los 5 últimos vuelos
    ultimosCinco(flights);

    switch (prompt("Desea finalizar la sesión? y/n")) {
        case 'n': 
           'Hola';
            break;
        default: 
            noFin = false
            break;       
     }

} while (noFin);   