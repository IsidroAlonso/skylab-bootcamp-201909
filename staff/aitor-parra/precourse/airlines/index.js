/*Skylab Airlines! 
(Los datos de los vuelos están al final del enunciado, podéis usarlos en vuestro código)
Programa una interfaz de usuario para una aerolínea (por terminal...). 
Esta aerolínea dispondrá de 10 vuelos para el dia de hoy, para empezar, 
estos vuelos deben estar declarados de manera global, cuando se llame a la función:
Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: 
El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuántos vuelos efectúan escalas.
Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
*/

//EL CODIGO SE EJECUTA LLAMANDO LA FUNCIÓN 'airLines' ------> 'airLines()'

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

var flightBoardArr1 =[];
var flightBoardArr2 =[]; 
var lastFlights = [];

function enterUser(){

  user = prompt("Enter user name");
  //condicional para aceptar sólo 'user' que sean string, y bienvenida a 'user'
    
    if (user === false || !isNaN(user)) {
      alert("Please, enter a valid user name");
      
      } else {
      alert(`"Hola ${user}! \nBienvenido a nuestro servicio de booking online!`);
        }
  return;
}


function vuelosVista(){
   
    
    /* loop y condicional para recorrer array 'flights' y acumular el valor de propiedades
    en dos nuevos array */
    
  for (let i=0 ; i < flights.length ; i++){
      if (flights[i].scale === false) {
        
        flightBoardArr1.push("\n El vuelo con origen: " + flights[i].from + ", y destino: " +flights[i].to +", tiene un coste de "+ flights[i].cost+"€");
      } else {
        
        flightBoardArr2.push("\n El vuelo con origen: " + flights[i].from + ", y destino: " +flights[i].to +", tiene un coste de "+ flights[i].cost+"€" +
     ", con escala");
    }
    
  }
    
/* solucion para mostrar en alert (o console) todos los vuelos, primero sin escala y
  después con escala; no he sabido como intercalar con escala y sin escala.*/
    
  alert(flightBoardArr1.toString() + flightBoardArr2.toString() +".");    
  return;
}


/* primero creo array 'pR' para acumular los valores de 'cost',
luego creo array 'pRSuma' para, mediante dos loops, obtener la suma total de todos los 'cost' */  

function averageCost(){

var pR = [];
var pRSuma = 0;


  for (let f=0 ; f<flights.length ; f++){
    pR.push(flights[f].cost)
  }
  
  
  for (let j=0 ; j<pR.length ; j++){
    var pRSuma = pRSuma + pR[j];  
  }
      
  
  //muestro por 'alert' el precio promedio de los vuelos
  alert(`El precio medio de todos los vuelos es: ${Math.floor(pRSuma/flights.length)}€`);
  return;
}


function scaleFlight(){
  
  //muestro por 'alert' solamente los vuelos que realizan escala
  alert(`Los siguientes vuelos realizan escala: ${flightBoardArr2}`);
  return;
}
    
function lastFive(){

for (let h=flights.length-5 ; h<flights.length ; h++){
          lastFlights.push(" "+flights[h].to);}
        
  alert(`Los destinos de los últimos 5 vuelos del día son ${lastFlights }`);
  return
}

function airLines(){
  enterUser();
      vuelosVista();
          averageCost();
              scaleFlight();
                  lastFive();
return;
}
      