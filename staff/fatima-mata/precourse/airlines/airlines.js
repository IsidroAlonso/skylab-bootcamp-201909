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

welcome();
printFligths();
averagePrice();
printScaleFlights();
printLastFlights(5);
selectUser();

// Funciones Airlines normal.
var userName = "";
function welcome() {
    userName = prompt('Bienvenid@ a Skylab Airlines. Por favor, introduzca su nombre de ususario:');
}

function printFligths() {
    console.log(userName + ', los vuelos previstos para hoy son los siguientes:');
    let print = null;
    for (let i = 0; i < flights.length; i++) {
        print = flights[i];
        if (print['scale']) {
            console.log("El vuelo con ID " + print['id'] + " y origen: " + print['from'] + " y destino: " + print['to'] + ", tiene un coste de: " + print['cost'] + " € y realiza escala.");
        } else {
            console.log("El vuelo con ID " + print['id'] + " y origen: " + print['from'] + " y destino: " + print['to'] + ", tiene un coste de: " + print['cost'] + " € y no realiza escala.");
        }
    }
}

function averagePrice() {
    let price = null;
    let sum = 0;
    for (let i = 0; i < flights.length; i++) {
        price = flights[i];
        sum += price['cost'];
    }
    let average = (sum / flights.length).toFixed(2);
    console.log('El coste medio de los vuelos es: ' + average);
}

function printScaleFlights() {
    let scaleFlights = null;
    let sum = 0;
    for (let i = 0; i < flights.length; i++) {
        scaleFlights = flights[i];
        if (scaleFlights['scale']) {
            sum++;
        }
    }
    console.log('Hay ' + sum + ' vuelos que realizan escala.');
}

function printLastFlights(numFlights) {
    let lastFlights = null;
    console.log('Los últimos ' + numFlights + ' destinos del día son:');
    for (let i = flights.length - 1; i > numFlights; i--) {
        lastFlights = flights[i];
        console.log(lastFlights['to']);
    }
}

// Incio Airlines pro. Selección tipo usuario.

function selectUser() {
    let Usertype = prompt('Por favor, indique si usted es ADMIN o USER').toUpperCase();
    switch (Usertype) {
        case 'ADMIN':
            adminFunc();
            break;
        case 'USER':
            userFunc();
            break;
        default:
            alert('El ususario introducido no es correcto.');
            selectUser();
            break;
    }
}

// Funciones de Administrador. 

function adminFunc() {
    let loginAdmin = 'LAMBDA';
    let login = prompt('Por favor, introduzca la contraseña de Administrador.');
    if (login == loginAdmin) {
        adminStart();
    } else {
        alert('Contraseña incorrecta.');
        let loginError = prompt('¿Qué desea hacer?\n1. Introducir contraeña de nuevo.\n2.Volver al menú principal.');
        if (loginError == 1) {
            adminFunc();
        } else if (loginError == 2) {
            selectUser();
        }
    }
}

function adminStart() {
    let admin = prompt('Hola, Administrador! ¿Qué desea hacer?\n1. Añadir vuelo.\n2. Borrar vuelo\n3. Salir.');
    if (admin == 1) {
        addFlights();
    } else if (admin == 2) {
        deleteFlight();
    } else if (admin == 3) {
        alert('¡Hasta pronto!');
    }
}

function addFlights() {
    alert('Están permitidos un máximo de 15 vuelos. Actualmente, existen ' + flights.length + ' vuelos creados. Puede crear ' + (15 - flights.length) + ' vuelos nuevos.');
    if (flights.length == 15) {
        alert("No se pueden añadir más de 15 vuelos. Por favor, borre algún vuelo para poder crear uno nuevo.");
        addFlights();
    } else {
        let newId = parseInt(flights[flights.length - 1]['id']) + 1;
        let newTo = prompt('Introduzca el lugar de llegada del nuevo vuelo.');
        let newFrom = prompt('Introduzca el lugar de salida del nuevo vuelo.');
        let newCost = prompt('Introduzca el precio del nuevo vuelo.');
        if (isNaN(newCost)) {
            prompt('El precio introducido debe ser un número.');
        }
        let newScale = '';
        let option = true;
        do {
            option = false;
            newScale = prompt('¿El vuelo realizará alguna escala? (S/N)').toUpperCase();
            switch (newScale) {
                case 'S':
                    newScale = true;
                    break;
                case 'N':
                    newScale = false;
                    break;
                default:
                    alert('Opción incorrecta');
                    option = true;
                    break;
            }
        } while (option);

        flights.push({
            id: newId,
            to: newTo,
            from: newFrom,
            cost: newCost,
            scale: newScale
        });
    }
    console.log('Vuelo añadido correctamente. Actualmente hay ' + flights.length + ' vuelos creados. Son los siguientes:');
    printFligths();
    adminContinue();
}

function deleteFlight() {
    let idDelete = parseInt(prompt('Introduce el id que deseas borrar:'));
    let flight = null;
    let flightFound = false;
    for (let i = 0; i < flights.length; i++) {
        flight = flights[i];
        if (flight['id'] == idDelete) {
            flights.splice(i, 1);
            flightFound = true;
        }
    }
    if (flightFound) {
        alert('Vuelo borrado correctamente.');
    } else {
        alert('El id introducido no es correcto.');
        let intentar = prompt('¿Deseas intentarlo de nuevo? (S/N)');
        if (intentar === 'S') {
            deleteFlight();
        } else {
            adminContinue();
        }
    }
    printFligths();
    adminContinue();
}

function adminContinue() {
    let adminFinish = prompt('¿Qué desea hacer ahora?\n1. Volver al menú de Administrador.\n2.Salir.')
    if (adminFinish == 1) {
        adminStart();
    } else if (adminFinish == 2) {
        alert('¡Hasta pronto!');
    }
}

function userFunc() {
    let existe = false;
    let bucle = false;
    do {
        let useroption = prompt('Por favor, introduzca el criterio de búsqueda:\n1. Buscar por precio más alto.\n2. Buscar por precio más bajo. \n3. Buscar por mismo precio.');
        let price = parseInt(prompt('Por favor, introduzca el precio por el que desea buscar.'));
        bucle = false;
        existe = false;
        switch (useroption) {
            case '1':
                console.log(`Los vuelos con importe superior a ${price}€ son:`)
                for (i = 0; i < flights.length; i++) {
                    if (flights[i].cost > price) {
                        console.log(`id:${flights[i].id}; Origen: ${flights[i].from}; destino: ${flights[i].to}; precio: ${flights[i].cost}€; escala: ${flights[i].scale}`);
                        existe = true;
                    }
                }
                break;
            case '2':
                console.log(`Los vuelos con importe inferior a ${price}€ son:`)
                for (i = 0; i < flights.length; i++) {
                    if (flights[i].cost < price) {
                        console.log(`id:${flights[i].id}; Origen: ${flights[i].from}; destino: ${flights[i].to}; precio: ${flights[i].cost}€; escala: ${flights[i].scale}`);
                        existe = true;
                    }
                }
                break;
            case '3':
                for (i = 0; i < flights.length; i++) {
                    if (flights[i].cost == price) {
                        console.log(`Los vuelos por importe de ${price}€ son:`)
                        console.log(`id:${flights[i].id}; Origen: ${flights[i].from}; destino: ${flights[i].to}; precio: ${flights[i].cost}€; escala: ${flights[i].scale}`);
                        existe = true;
                    }
                }
                break;
        }

        if (!existe) {
            let respuesta = prompt("No existe ningún vuelo que cumpla con el criterio seleccionado. ¿Desea realizar una nueva búsqueda? (S/N)");
            if (respuesta.toUpperCase() === "S") {
                bucle = true;
            } else {
                bucle = false;
            }
        }
    } while (bucle);

    usercontinue();
}

function buyFunc() {
    let userBuy = prompt('Por favor, introduzca el ID del vuelo que desea comprar');
    for (i = 0; i < flights.length; i++) {
        if (flights[i].id == userBuy) {
            alert(`El vuelo comprado tiene id:${flights[i].id}; Origen: ${flights[i].from}; Destino:${flights[i].to};precio: ${flights[i].cost}€; escala: ${flights[i].scale}`)
        };
    }
    alert('Gracias por su compra, vuelva pronto.')
    usercontinue()
}

function usercontinue() {
    let userFinish = prompt('¿Qué desea hacer ahora?\n1. Realizar otra consulta.\n2. Comprar vuelo.\n3.Salir.')
    if (userFinish == 1) {
        userFunc();
    } else if (userFinish == 2) {
        buyFunc()
    } else if (userFinish == 3) {
        alert('¡Hasta pronto!');
    }
}