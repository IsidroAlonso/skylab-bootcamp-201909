
// AIRLINES PRO
//EL CODIGO SE EJECUTA LLAMANDO LA FUNCIÓN 'airLinesPro' ------> airLinesPro()


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

function vuelosVista(){
   
alert('A continuación le mostramos todos los vuelos disponibles.')  
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
  
alert(flightBoardArr1.toString() + flightBoardArr2.toString() + '.');    
return;
}


//La función adminUserAdmin() conduce al usuario por los sevicios de ADMIN o USER

function adminUserAdmin(){

  theUser = prompt("¿Es ústed ADMIN o USER?");

  if (theUser === "ADMIN" || theUser === "admin") {
    
    var queHacer = Number(prompt('Presiona [1] para añadir vuelo\nPresione [2] para eliminar vuelo'))
    
    switch(queHacer){
      case 1:
        addVuelo();
      break;
      case 2:
        eliminarVuelo();
      break;
      default:
      break;
}} else if (theUser === "USER" || theUser === "user") {
        thePrice();
      }else {
        alert("Si es administrador teclee ADMIN, si es usuario teclee USER. Gracias")
        adminUserAdmin()
    }
  }



  /*
  if (theUser === "ADMIN" || theUser === "admin") {
      var addV = confirm('¿Desea añadir un vuelo?');
      if (addV === true) {
          addVuelo()
      } else { 
          var delV = confirm('¿Desea eliminar un vuelo?');
          if (delV === true) {
              eliminarVuelo()
          } }*/

  


// La función addVuelo() permite añadir vuelos preguntando sus propiedades, hasta una máximo de 15 vuelos.

function addVuelo (){
 
  if (flights.length >= 15) {
    alert('Número máximo de vuelos alcanzado!\n\nSaliendo del sistema');
    
  } else {
      
          newDest = prompt('¿Cual es la ciudad destino?');
          newOrig = prompt('¿Cual es la ciudad origen?');
          newCost = prompt('¿Cual es el precio del vuelo?');
          isScale = prompt('¿Es un vuelo con escala? (Si/No)');
  
          
          if (isScale === 'Si') {
          newScale = true;
          } else if (isScale === 'No') {
          newScale = false
          } else {
          newScale = false
          }

          var sScala = ""
          switch (newScale) {
            case true:
              sScala = 'con escala';
              break;
            case false:
              sScala = 'sin escala';
              break;
            default:
              break;
          }
    
          flights[flights.length] = {id:(flights.length), to: newDest, from: newOrig, cost: newCost, scale: newScale};
          alert('El vuelo ID' + flights.length + ' origen en ' + newOrig + ' destino ' + newDest + ' , ' + sScala + 
                ' y coste ' + newCost + ' ha sido añadido al sistema.');
          
} 

var otraAccion = Number(prompt('Presione [0] para salir del sistema\nPresione [1] para volver a entrar.'))

switch(otraAccion){
  case 0:
    alert('Saliendo del sistema.');
    break;
  case 1:
    alert('Volviendo a entrar en el sistema.');
    airLinesPro();
    break;
  default:
    break;
}

}


// La función eliminarVuelo() se ejecuta si no deseamos añadir un vuelo.

var arrVuelosElim1 = [];
var arrVuelosElim2 = [];
var flightBoardA1 = [];
var flightBoardA2 = [];

function eliminarVuelo (){
  for (let i=0 ; i < flights.length ; i++){
    if (flights[i].scale === false) {
      
      flightBoardA1.push("\n Vuelo ID" + flights[i].id + 'con origen' + flights[i].from + ", y destino: " +flights[i].to +", coste de "+ flights[i].cost+"€");
    } else {
      
      flightBoardA2.push("\n Vuelo ID" + flights[i].id + 'con origen' + flights[i].from + ", y destino: " +flights[i].to +", coste de "+ flights[i].cost+"€" +
   ", con escala");
  }}
  alert(flightBoardA1.toString() + flightBoardA2.toString() + '.');


  var elimVuelo = Number(prompt('Indique el ID del vuelo que desea eliminar'));
  

  flights.splice(elimVuelo+1, 1)
  
  alert('El vuelo ID' + flights[elimVuelo].id + ' origen ' + flights[elimVuelo].from + ' destino ' + flights[elimVuelo].to + 
        ' y coste ' + flights[elimVuelo].cost + '€, ha sido eliminado del sistema.')
  alert('El listado actualizado de vuelos es el siguiente:');
  
  for (var e = 0 ; e < flights.length ; e++) {
      if (flights[e].scale === false) {
        arrVuelosElim1.push("\n El vuelo con origen: " + flights[e].from + ", y destino: " + flights[e].to + ", tiene un coste de " + flights[e].cost+ "€");
      } else if (flights[e].scale === true) {
        arrVuelosElim2.push("\n El vuelo con origen: " + flights[e].from + ", y destino: " + flights[e].to + ", tiene un coste de " + flights[e].cost+ "€" +
   ", con escala");
      }
    
  }
  
  alert(arrVuelosElim1.toString() + arrVuelosElim2.toString() + '.');

  var otraAccion1 = Number(prompt('Presione [0] para salir del sistema\nPresione [1] para volver a entrar.'))
  switch(otraAccion1){
    case 0:
      alert('Saliendo del sistema.');
      break;
    case 1:
      alert('Volviendo a entrar en el sistema.');
      airLinesPro();
      break;
    default:
      break;
  }
 
}


// Con la función thePrice() consigo buscar y mostrar vuelos por su valor coste.

var arrPrSup = [];
var arrPrIgual = [];
var arrPrInf = [];

function thePrice () {
  var thePr = Number(prompt('Por favor, teclee un importe.'));

  flights.sort(function(a, b){return a.cost - b.cost})

  for (var n = 0 ; n < flights.length ; n++) {

    if (thePr < flights[n].cost) {
      arrPrSup.push('\nVuelo ID' + flights[n].id + ' origen ' + flights[n].from + ' destino ' + flights[n].to + ' y coste ' + flights[n].cost);
      

    } else if (thePr === flights[n].cost) {
      arrPrIgual.push('\nVuelo ID' + flights[n].id + ' origen ' + flights[n].from + ' destino ' + flights[n].to + ' y coste ' + flights[n].cost);
      

    } else if (thePr > flights[n].cost) {
      arrPrInf.push('\nVuelo ID' + flights[n].id + ' origen ' + flights[n].from + ' destino ' + flights[n].to + ' y coste ' + flights[n].cost);
      
    }
    
  }
  
  var thePriceAsk = Number(prompt('Ha introducido el valor "' + thePr + '".' + '\nSi desea consultar los vuelos más caros, teclee "1"\n'+
                           'Si desea consultar los vuelos más baratos, teclee "2"\n'+
                           'Si desea consultar los vuelos con importe exacto, teclee "3"'));
  
  switch (thePriceAsk) {
    case 1:
      alert(arrPrSup);
      break;
    case 2:
      alert(arrPrInf);
      break;
    case 3:
      alert(arrPrIgual);
      break;
    default:
      thePrice()
      break;
  }
  
}

function airLinesPro () {
  vuelosVista();
  adminUserAdmin();
}
