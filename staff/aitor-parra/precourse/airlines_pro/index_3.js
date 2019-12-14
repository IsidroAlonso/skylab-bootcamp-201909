/*
PRO:
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:
Si eres ADMIN, la función debería permitir:
Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:
Buscar por precio (más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados y, indicando el ID, 
el programa responderá: "Gracias por su compra, vuelva pronto."
*/
// AIRLINES PRO
//EL CODIGO SE EJECUTA LLAMANDO LA FUNCIÓN 'airLinesPro' ------> 'airLinesPro()'


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





function adminUserAdmin(){

  theUser = prompt("¿Es ústed ADMIN o USER?");
  
  if (theUser === "ADMIN" || theUser === "admin") {
      var addV = confirm('¿Desea añadir un vuelo?');
      if (addV === true) {
          addVuelo()
      } else { 
          var delV = confirm('¿Desea eliminar un vuelo?');
          if (delV === true) {
              eliminarVuelo ()
          } }

  } else if (theUser === "USER" || theUser === "user") {
      quePrecio()
  } else {
      alert("Si es administrador teclee ADMIN, si es usuario teclee USER. Gracias")
      adminUser()
  }
}

function addVuelo (){
 
  if (flights.length >= 15) {
    alert('Número máximo de vuelos alcanzado!\n\nSaliendo del sistema');
    
  } else {

     /* añadirVuelo = prompt('Como administrador puede introducir nuevos vuelos al sistema.\n\n¿Desea añadir un nuevo vuelo? (Si/No)');
      if (añadirVuelo === "Si" || añadirVuelo === 'si') {*/

      
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
          
} /*      else if (añadirVuelo === "No" || añadirVuelo === 'no' || añadirVuelo === false){
      alert('No se ha añadido ningun vuelo.\n\nSaliendo del sistema.');}
  */
}


var arrVuelosElim1 = [];
var arrVuelosElim2 = [];

function eliminarVuelo (){

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
 
}


function quePrecio () {
  var quePr = Number(prompt('Introduzca "ALTO" si desea encontrar el vuelo más caro, o "BAJO" si desea el vuelos más barato'));
  
  if ( quePr === 'ALTO' || quePr === 'alto') { alert('Ha elegido el vuelo mas caro');
  flights.sort(function(a, b){return a.cost - b.cost})
  alert('El vuelo más caro tiene un coste de ' + flights[flights.length - 1].cost + ' con origen en ' + flights[flights.length - 1].from + ' y destino a ' + flights[flights.length - 1].to);
  alert('El código de su vuelo es ID' + flights[flights.length - 1].id + '.\nGracias por su compra, vuelva pronto.' );

  } else if ( quePr === 'BAJO' || quePr === 'bajo') { alert('Ha elegido el vuelo mas barato');

  flights.sort(function(a, b){return a.cost - b.cost})
  alert('El vuelo más barato tiene un coste de ' + flights[0].cost + ' con origen en ' + flights[0].from + ' y destino a ' + flights[0].to);
  alert('El código de su vuelo es ID' + flights[0].id + '.\nGracias por su compra, vuelva pronto.' );

  } else { 
    var anyNum = Math.floor(0.5 + Math.random() * 7.9);
    alert("Hemos seleccionado un vuelo para ústed de forma aleatoria :\n"  + 'Vuelo desde '+ flights[anyNum].from + ' a ' + flights[anyNum].to + ' con un coste de ' + flights[anyNum].cost + '€')
      
      }
    }

function airLinesPro () {
      adminUserAdmin();
}
