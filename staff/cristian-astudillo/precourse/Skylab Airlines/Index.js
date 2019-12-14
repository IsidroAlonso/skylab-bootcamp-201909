/*PROYECTO TEMA 2 : Skylab Airlines! ✈️🛩

Programa una interfaz de usuario para una aerolínea (por terminal...).
Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar,
estos vuelos deben estar declarados de manera global,
cuando se llame a la función:
- Se preguntará por el nombre de usuario y dará la bienvenida.
- El usuario visualizará todos los vuelos disponibles de una forma amigable: 
  El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
- A continuación, el usuario verá el coste medio de los vuelos.
- También podrá ver cuántos vuelos efectúan escalas.
- Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.


PRO:
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, 
el programa se comportará de la siguiente manera:
Si eres ADMIN, la función debería permitir:
- Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert(). 
- Poder eliminar vuelos mediante el ID.

Si eres USER la función debería permitir:
- Buscar por precio (más alto, más bajo o igual), el usuario debería mostrar los datos de los vuelos encontrados e,
  indicando el ID, el programa responderá: "Gracias por su compra, vuelva pronto."
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

//console.log(flights[0].to); //Bilbao


//FUNCIÓN VUELOS CON ESCALAS
function vueloEscalas(){
    let escala= flights.filter(flight => flight.scale === true);
    let escala2 = escala.forEach((escalas) => {
        alert(JSON.stringify(`Desde ${escalas.to.toUpperCase()} a ${escalas.from.toUpperCase()} realiza escalas, con un coste de ${escalas.cost} €.`));  
    }); 
}

//FUNCIÓN CONTINUAR VUELOS CON ESCALAS
function continuarEscala(){
    var continuar1 = confirm('Desea ver los vuelos que REALIZAN ESCALAS?')
    if(continuar1){
        vueloEscalas();
    } else {
        return alert('Hasta luego, que tenga un buen día!!');
    }
}   


//FUNCIÓN ÚLTIMOS 5 VUELOS
function cincoVuelos(){
    let FiveFlights= flights.slice(6);
    let FiveFlights2= FiveFlights.forEach((vuelo) => {   
        alert(JSON.stringify(`Desde ${vuelo.to.toUpperCase()} a ${vuelo.from.toUpperCase()} con un coste ${vuelo.cost} €`));  
      
    });
}

//FUNCIÓN CONTINUAR ÚLTIMOS 5 VUELOS
function ultimosVuelos(){
    var continuar1 = confirm('Desea continuar con los ÚLTIMOS 5 VUELOS DE HOY')
    if(continuar1){
        cincoVuelos();
    } else {
        return alert('Hasta luego, que tenga un buen día!!');
    }
}

//PREGUNTA A USUARIO SI DESEA CONTINUAR NUEVAMENTE.
function nuevamente(){
    var confirmar3 = confirm('Desea consultar nuevamente los vuelos?');
    if(confirmar3){             
    passenger();
        } else {
            return alert('Hasta luego, que tenga un buen día!!.... Gracias por confiar en Aerolíneas Skylab Airlines...');     
        }   

}

//NOMBRE DE USUARIO Y DAR LA BIENVENIDA.
function passenger(){

        var fecha = new Date(); //FECHA
        var nombre = prompt('Hola, pasajero!! Bienvenido a Skylab Airlines!!... Me podria decir su nombre completo, por favor?' );
            if(!isNaN(nombre) || nombre === null || nombre === '' ){
                var continuar1 = confirm(`Disculpe, pero necesitamos saber su nombre,... Desea continuar?`);  
            if(continuar1){
                passenger();
                } else { 
                    return alert('Hasta luego, que tenga un buen día!!');       
            }          

                } else if(nombre){       
                     alert(`Muchas gracias ${nombre.toUpperCase()}... Bienvenido a Skylab Airlines!!`);      
            }

          //VISUALIZAR VUELOS DISPONIBLES
            alert(`A continuación, ofrecemos nuestros vuelos para el día de hoy ${fecha}:`);    
            for(let flight in flights){
                if(flights[flight].scale === true){
                    alert(`El ID ${flight}, tiene sus vuelo desde ${flights[flight].from.toUpperCase()} a ${[flights[flight].to.toUpperCase()]}, con un coste de ${flights[flight].cost} €, y REALIZA ESCALA.`);        
                } else {
                    alert(`El ID ${flight}, tiene sus vuelo desde ${flights[flight].from.toUpperCase()} a ${[flights[flight].to.toUpperCase()]}, con un coste de ${flights[flight].cost} €, y NO REALIZA ESCALA.`);
                }        
            }     
    
        //COSTE MEDIO DE LOS VUELOS     
        let suma = Array.from(flights,({cost})=>cost);   
        const costeMedio = suma.reduce((a,b)=>a+b);
        alert(`Según el COSTE TOTAL de los vuelos es de ${costeMedio} €.`);
    
        //VUELOS CON ESCALAS
        //PREGUNTA A USUARIO SI DESEA CONTINUAR.
         var confirmar1 = confirm('Desea ver los vuelos que realizan escalas?'); 
            if(confirmar1){
                vueloEscalas()  
                    } else {
                        continuarEscala();
                            return alert('Gracias por confiar en Skylab Airlines... ');
                    }
            
    
        //ULTIMOS 5 VUELOS   
        //PREGUNTA A USUARIO SI DESEA CONTINUAR.
        var confirmar2 = confirm('Desea consultar los últimos 5 vuelos del día de hoy?'); 
        alert(`A continuación, mostramos los últimos 5 vuelos del día ${fecha}:`)
        if(confirmar2){
            cincoVuelos()    
            } else {           
                ultimosVuelos();
                    return alert('Gracias por confiar en Skylab Airlines... ');           
        }   
            
            nuevamente();        
}

passenger();



