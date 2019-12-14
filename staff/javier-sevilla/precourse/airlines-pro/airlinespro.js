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

const arrCiudades = ["Bilbao", "Barcelona","New York","Tokyo", "Madrid",
                  "London", "Los Angeles","Tel-Aviv", "Sidney","Shangai", "Roma",
                  "Paris", "Mostoles","Alcorcon", "Hospitalet","El Masnou"];

let user = '';
let noFin = true;
let noFinUser = true;
let tipoUsuario = "";
let opcionAdmin = "";
let opcionUser = "";
let finalizarAlta = false;
let salidasVuelos = 0;
let destinoVuelos = 0;
let coste = 0;
let escala = true;
let noFinCoste = true;

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
    let logFinal = "";
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

function darAltaSalida() {
    let noFinAlta = true;
    do {
        salidasVuelos = Number(prompt("** AEROPUERTOS DE SALIDA **" + 
                              "\n ESCOJA UNA OPCION DE LA SIGUIENTE LISTA:" +
                              "\n 0-  Bilbao" + 
                              "\n 1-  Barcelona" + 
                              "\n 2-  New York" + 
                              "\n 3-  Tokyo" + 
                              "\n 4-  Madrid" + 
                              "\n 5-  London" + 
                              "\n 6-  Los Angeles" + 
                              "\n 7-  Tel-Aviv" + 
                              "\n 8-  Sidney" + 
                              "\n 9-  Shangai" + 
                              "\n 10- Roma" + 
                              "\n 11- Paris" + 
                              "\n 12- Mostoles" + 
                              "\n 13- Alcorcon" +
                              "\n 14- Hospitalet" +
                              "\n 15- El Masnou"));  

        if (salidasVuelos != 0 &&
            salidasVuelos != 1 && 
            salidasVuelos != 2 &&
            salidasVuelos != 3 &&
            salidasVuelos != 4 &&
            salidasVuelos != 5 &&
            salidasVuelos != 6 &&
            salidasVuelos != 7 &&
            salidasVuelos != 8 &&
            salidasVuelos != 9 &&
            salidasVuelos != 10 &&
            salidasVuelos != 11 &&
            salidasVuelos != 12 &&
            salidasVuelos != 13 &&
            salidasVuelos != 14 &&
            salidasVuelos != 15 &&                
            salidasVuelos != null) {
            alert("Escoja una opción de la lista por favor!")                    
        } else if (salidasVuelos === null) {
            finalizarAlta = true
            noFinAlta = false;
        } else {
            noFinAlta = false;
        }
    } while(noFinAlta);
    return salidasVuelos;
}

function darAltaDestino() {
    let noFinAlta = true;
    do {
        destinoVuelos = Number(prompt("** AEROPUERTOS DE DESTINO **" + 
                              "\n ESCOJA UNA OPCION DE LA SIGUIENTE LISTA:" +
                              "\n 0-  Bilbao" + 
                              "\n 1-  Barcelona" + 
                              "\n 2-  New York" + 
                              "\n 3-  Tokyo" + 
                              "\n 4-  Madrid" + 
                              "\n 5-  London" + 
                              "\n 6-  Los Angeles" + 
                              "\n 7-  Tel-Aviv" + 
                              "\n 8-  Sidney" + 
                              "\n 9-  Shangai" + 
                              "\n 10- Roma" + 
                              "\n 11- Paris" + 
                              "\n 12- Mostoles" + 
                              "\n 13- Alcorcon" +
                              "\n 14- Hospitalet" +
                              "\n 15- El Masnou"));  

        if (destinoVuelos != 0 &&
            destinoVuelos != 1 && 
            destinoVuelos != 2 &&
            destinoVuelos != 3 &&
            destinoVuelos != 4 &&
            destinoVuelos != 5 &&
            destinoVuelos != 6 &&
            destinoVuelos != 7 &&
            destinoVuelos != 8 &&
            destinoVuelos != 9 &&
            destinoVuelos != 10 &&
            destinoVuelos != 11 &&
            destinoVuelos != 12 &&
            destinoVuelos != 13 &&
            destinoVuelos != 14 &&
            destinoVuelos != 15 &&                
            destinoVuelos != null) {
            alert("Escoja una opción de la lista por favor!")                    
        } else if (destinoVuelos === null) {
            finalizarAlta = true
            noFinAlta = false;
        } else {
            noFinAlta = false;
        }
    } while(noFinAlta);
    return destinoVuelos;
}

function darAltaCoste() {
    let noFinAlta = true;
    do {
        coste = parseInt(prompt('INTRODUZCA COSTE'));
        if (isNaN(coste)) {
           alert("Debe introducir un coste!")
        } else {
           noFinAlta = false;
        }
    } while(noFinAlta);
    return coste;
}

function darAltaEscala() {
    let noFinAlta = true;
    let escalaFn
    do {
        escalaFn = prompt("INTRODUZCA EL Nº DE OPCION " + 
                           "\n 1- VUELO CON ESCALA" + 
                           "\n 2- VUELO SIN ESCALA");
        if (escalaFn != "1" &&  escalaFn != "2") {
           alert("Debe introducir una opcion!")
        } else {
           if (escalaFn === "1") {
            escala = true 
           } else {
            escala = false 
           }escala
           noFinAlta = false;
        }
    } while(noFinAlta);
    return escala;
}

function altaTablaVuelos() {
    let arrVuelos = "";
    let arrVuelosString = "";
    let i = 0;
    let idMax = 0;
    for (i = 0; i < flights.length; i++) {
       if (flights[i].id > idMax) {
           idMax = flights[i].id     
       }
    } 
    idMax = idMax + 1
    arrVuelos = { id: idMax,
                  to: arrCiudades[salidasVuelos],
                  from: arrCiudades[destinoVuelos],
                  cost: coste,
                  scale: escala 
                };
    flights.push(arrVuelos);
    arrVuelosString = arrVuelos.toString();
    alert("Se ha dado de alta correctamente"); 
}

function darBajaVuelos() {
    let noFinBaja = true;
    let idOk = true;
    let idBaja = 0;
    let idString = "";
    let posTablaFlights = 0;
    let volvemos = "";

    do {
    //muestro id
        idString = "";
        for (i = 0; i < flights.length; i++) {
            idString += "\n ID: " + flights[i].id
        } 
        idBaja = prompt("INTRODUZCA EL ID QUE QUIERE DAR DE BAJA" + 
                               "\n LISTA ID DISPONIBLES:" + idString)
        if (idBaja === null) {
           return
        }
        idBaja = Number(idBaja);

        let idOk = true;
        for (i = 0; i < flights.length; i++) {
            if (flights[i].id != idBaja) {
                idOk = false;
            } else {
                idOk = true; 
                posTablaFlights = i
                i = Number.MAX_VALUE;
            }
         } 

        if (isNaN(idBaja) || (idOk === false)){
            alert("El ID es incorrecto o no existe"); 
        } else  {
            flights.splice(posTablaFlights,1);
            alert("El ID " + idBaja + " se ha borrado correctamente"); 
            volvemos = prompt("Desea dar de baja otro ID? s/n");
            if (volvemos != "s") {
                noFinBaja = false;
            }
        }     
    } while(noFinBaja);

}

function buscaPrecioAlto(costeMayor) {
    let idArr = [];
    let id = 0;
    let i = 0;
    let j = 0;
    let logFinal = "";
    let escala = "";
    let noFinId = true;
    console.log("");
    console.log("");
    console.log("LISTA CON VUELOS CON COSTE MAYOR A: " + costeMayor);

    for (i = 0; i < flights.length; i++) {
       if (flights[i].cost >= costeMayor) {
           idArr[j] = flights[i].id  
           j = j + 1;  
           if (flights[i].scale) {
               escala = " con escala"
            } else {
             escala = " sin escala"
            }
            logFinal = "ID del vuelo: " +
                    flights[i].id +
                   ". Origen: " +
                    flights[i].to +
                    ", destino: " +
                    flights[i].from + 
                    ", coste: " +
                    flights[i].cost +
                    escala;
            console.log(logFinal);                
        }
    }    
    
    if (j === 0) {
        alert("No hay ningún vuelo para seleccionar!")
        return;
    }
     
     do {
        id = prompt("INTRODUZCA EL ID QUE QUIERE COMPRAR" );
        if (id === null) {
            alert("Ha cancelado la compra"); 
            return;
        }
        id = Number(id);
        if (isNaN(id)) {
            alert("Id Incorrecto");   
        } else {
            idEncontrado = false; 
            for (i = 0; i < idArr.length; i++) {
                if (idArr[i] != id) {
                    idEncontrado = false;   
                } else {
                    idEncontrado = true;
                    i = Number.MAX_VALUE;
                }
            } 
            if (idEncontrado) {
                alert("Gracias por su compra, vuelva pronto.");
                noFinId = false;
            } else {
                alert("Id no se encuentra en la lista.");
            }
        }
    } while(noFinId) 
}

function buscaPrecioBajo(costeMenor) {
    let idArr = [];
    let id = 0;
    let i = 0;
    let j = 0;
    let logFinal = "";
    let escala = "";
    let noFinId = true;
    console.log("");
    console.log("");
    console.log("LISTA CON VUELOS CON COSTE MENOR A: " + costeMenor);

    for (i = 0; i < flights.length; i++) {
       if (flights[i].cost <= costeMenor) {
           idArr[j] = flights[i].id  
           j = j + 1;  
           if (flights[i].scale) {
               escala = " con escala"
            } else {
             escala = " sin escala"
            }
            logFinal = "ID del vuelo: " +
                    flights[i].id +
                   ". Origen: " +
                    flights[i].to +
                    ", destino: " +
                    flights[i].from + 
                    ", coste: " +
                    flights[i].cost +
                    escala;
            console.log(logFinal);                
        }
    }        
    
    if (j === 0) {
        alert("No hay ningún vuelo para seleccionar!")
        return;
    }
     
     do {
        id = prompt("INTRODUZCA EL ID QUE QUIERE COMPRAR" );
        if (id === null) {
            alert("Ha cancelado la compra"); 
            return;
        }
        id = Number(id);
        if (isNaN(id)) {
            alert("Id Incorrecto");   
        } else {
            idEncontrado = false; 
            for (i = 0; i < idArr.length; i++) {
                if (idArr[i] != id) {
                    idEncontrado = false;   
                } else {
                    idEncontrado = true;
                    i = Number.MAX_VALUE;
                }
            } 
            if (idEncontrado) {
                alert("Gracias por su compra, vuelva pronto.");
                noFinId = false;
            } else {
                alert("Id no se encuentra en la lista.");
            }
        }
    } while(noFinId) 
}


function buscaPrecioIgual(costeIgual) {
    let idArr = [];
    let id = 0;
    let i = 0;
    let j = 0;
    let logFinal = "";
    let escala = "";
    let noFinId = true;

    console.log("");
    console.log("");
    console.log("LISTA CON VUELOS CON COSTE IGUAL A: " + costeIgual);

    for (i = 0; i < flights.length; i++) {
       if (flights[i].cost === costeIgual) {
           idArr[j] = flights[i].id  
           j = j + 1;  
           if (flights[i].scale) {
               escala = " con escala"
            } else {
             escala = " sin escala"
            }
            logFinal = "ID del vuelo: " +
                    flights[i].id +
                   ". Origen: " +
                    flights[i].to +
                    ", destino: " +
                    flights[i].from + 
                    ", coste: " +
                    flights[i].cost +
                    escala;
            console.log(logFinal);                
        } 
    }       
    
    if (j === 0) {
        alert("No hay ningún vuelo para seleccionar!")
        return;
    }
     
     do {
        id = prompt("INTRODUZCA EL ID QUE QUIERE COMPRAR" );
        if (id === null) {
            alert("Ha cancelado la compra"); 
            return;
        }
        id = Number(id);
        if (isNaN(id)) {
            alert("Id Incorrecto");   
        } else {
            idEncontrado = false; 
            for (i = 0; i < idArr.length; i++) {
                if (idArr[i] != id) {
                    idEncontrado = false;   
                } else {
                    idEncontrado = true;
                    i = Number.MAX_VALUE;
                }
            } 
            if (idEncontrado) {
                alert("Gracias por su compra, vuelva pronto.");
                noFinId = false;
            } else {
                alert("Id no se encuentra en la lista.");
            }
        }
    } while(noFinId) 
}

//Empezmos proceso

//Pedimos usuario y le damos la bienvenida
do {
   noFinUser = true;
   do {
      user = prompt('INTRODUZCA EL USUARIO');
      if (user != "" && user != null) {
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

    //pedimos si el usuario es admin o user
    noFinUser = true;
    do {
        tipoUsuario = prompt('INTRODUZCA "admin" o "user"');

        if (tipoUsuario == "admin" || tipoUsuario == "user" || tipoUsuario === null) {
            noFinUser = false;
        }
    } while (noFinUser); 

    //aqui tratamos las distintas opciones que hay por cada tipo de usuario
    finalizarAlta = false;
    switch (tipoUsuario) {
        case 'admin': 
            opcionAdmin = prompt("INTRODUZCA EL Nº DE OPCION" + 
                                  "\n 1- DAR DE ALTA VUELOS " + 
                                  "\n 2- BORRAR VUELOS POR ID");
            if (opcionAdmin != "1" && opcionAdmin != "2") {
                alert("NO HA ESCOGIDO NINGUNA DE LAS OPCIONES!")
                break;
            } else if (opcionAdmin === "1") {
                if (flights.length === 15) {
                    alert("LO SENTIMOA YA HAY 15 VUELOS PROGRAMADOS!"); 
                    break;
                }
                darAltaSalida();
                if (finalizarAlta) {
                    break;
                }
                darAltaDestino();
                if (finalizarAlta) {
                    break;
                }
                darAltaCoste();
                if (finalizarAlta) {
                    break;
                }
                darAltaEscala();
                if (finalizarAlta) {
                    break;
                }
                altaTablaVuelos();
            } else {
                darBajaVuelos();
            }
            break;
        case 'user': 
            opcionUser = prompt("INTRODUZCA EL Nº DE OPCION " + 
                                  "\n 1- BUSCAR POR PRECIO MAS ALTO" + 
                                  "\n 2- BUSCAR POR PRECIO MAS BAJO" +
                                  "\n 3- BUSCAR POR PRECIO IGUAL");
            if (opcionUser != "1" && opcionUser != "2" && opcionUser != "3") {
                alert("NO HA ESCOGIDO NINGUNA DE LAS OPCIONES!")
                break;
            }
            noFinCoste = true;
            do {
                coste = parseInt(prompt('INTRODUZCA COSTE'));
                if (isNaN(coste)) {
                   alert("Debe introducir un coste!")
                } else {
                    noFinCoste = false;
                }
            } while(noFinCoste); 
            
            if (opcionUser === "1") {
                buscaPrecioAlto(coste);  
            } else if (opcionUser === "2") {
                buscaPrecioBajo(coste);
            } else {
                buscaPrecioIgual(coste);
            }
            break;      
     }

    switch (prompt("Desea finalizar la sesión? y/n")) {
        case 'n': 
           'Hola';
            break;
        default: 
            noFin = false
            break;       
     }

} while (noFin);   