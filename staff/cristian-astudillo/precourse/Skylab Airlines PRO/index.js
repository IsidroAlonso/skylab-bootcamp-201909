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


//PREGUNTA AL USUARIO O PASAJERO SI ES ADMIN O USER.
function adminOUsuario(){
var adminOrUser = prompt('Hola pasajero.... Bienvenido a Skylab Airlines... Díganos si es ADMIN O USER.');
var regexAdmin = /admin/gi;
var regexUser = /user/gi;

    if(!isNaN(adminOrUser) || adminOrUser === '' || adminOrUser === null){
    var continuar3 = confirm('Desea continuar?');
        if(continuar3){
            adminOUsuario();
                } else {
                return alert('Hasta luego, que tenga un buen día!!....');
                }
    }

    if(regexAdmin.test(adminOrUser)){
        admin();    
        } else if (regexUser.test(adminOrUser)){
            user();        
        }
}

adminOUsuario();


//ADMIN
//CREAR Y ELIMINAR VUELOS.
function admin(){
        //PREGUNTA AL USUARIO SI DESEA SEGUIR CREANDO MÁS VUELOS.
    function continuar(){   
        var continuar = confirm('Desea seguir creando más vuelos?');
        if(continuar){      
            crearVuelos(); 
        } else {        
            return alert('Gracias por confiar en Skylab Airlines... '); 
        }
    }
   
    //INSERTAR NUMERO DE ID
    function crearVuelos(){

     //MÁXIMO 15 VUELOS.
    if(flights.length === 15){              
        alert('Lo sentimos... no puede crear más vuelos, ha superado el límite, el máximo son 15 vuelos.');
            return alert('Gracias por confiar en Skylab Airlines... '); 
    }

        //INSERTAR NÚMERO ID.
        function numeroID(){    
        alert('A continuación, para crear un vuelo, se pedirán los siguientes datos:')
        var insert = prompt('Ingrese un número de ID');    
        insert = parseInt(insert)    
        if(isNaN(insert) || insert === '' || insert ===  null){        
        var insert = prompt('Por favor, ingrese un máximo de 2 números.');
            if(insert === null || insert === ''){                
                return alert('Hasta luego, que tenga un buen día!!....');
            }          
        }
             //INSERTAR CUIDAD ORIGEN.    
            function ciudadOrigen(){
            var origen = prompt('Ingrese la cuidad de origen.');
                if(!isNaN(origen) || origen === '' || origen === null){   
                    var origen = prompt('Por favor, ingrese una cuidad de origen.');
                    if(origen === null || origen === ''){              
                        return alert('Hasta luego, que tenga un buen día!!....');
                    }   
                }            

                // //INSERTAR CUIDAD DESTINO
                function cuidadDestino(){
                var destino = prompt('Ingrese la cuidad de destino.');
                    if(!isNaN(destino) || destino === '' || destino === null){      
                    var destino = prompt('Por favor, ingrese la ciudad del destino.');
                        if(destino === null || destino === ''){      
                            return alert('Hasta luego, que tenga un buen día!!....');
                        } 
                    }    
    
         
                    // INSERTAR PRECIO VUELO.    
                    function precioVuelo(){
                    var precio = prompt('Ingrese un precio para el vuelo creado.');
                    precio = parseInt(precio);
                        if(isNaN(precio) || precio === '' || precio === null){
                        var precio = prompt('Por favor, ingrese el precio del vuelo.');
                            if(precio === null || precio === ''){      
                                return alert('Hasta luego, que tenga un buen día!!....');
                            } 
                        }     

                        // INSERTAR ESCALA.
                        function escala(){
                        var escala = confirm('Desea tener el vuelo con escala?');
                        if(escala){
                            escala = true;
                        } else {
                            escala = false;
                        }                           
                           
                            //VUELO CREADO.
                            var newFlight = {
                            id : insert,
                            to : origen,
                            from :destino, 
                            cost: precio,
                            scale: escala    
                            }

                            flights.push(newFlight);    
                            alert(JSON.stringify(flights));

                            continuar();

                            var borrarVuelo = confirm('Desea eliminar este o algún vuelo?');
                            if(borrarVuelo){
                                eliminarVueloID();                                
                            } else {
                                return alert('Hasta luego, que tenga un buen día!!....');
                            } 


                            //ELIMINAR VUELOS MEDIANTE ID.
                            function eliminarVueloID(){   

                                function eliminar(){    
                                 //PREGUNTA AL USUARIO POR NÚMERO DE ID(REVISAR SI NÚMERO DE ID ES DISTINTO)       
                                var vuelo2 = prompt('Ingrese número de ID para verificar el vuelo.');
                                vuelo2 = parseInt(vuelo2);   
                                flights.find(function(numeroID){
                                    if(numeroID.id === vuelo2){
                                        return alert(JSON.stringify(numeroID));     
                                    }     
                                }); 
                                    var eliminar = confirm('Desea eliminar este vuelo?');
                                    if(eliminar){      
                                        for(var i = 0; i < flights.length; i++){
                                            if(flights[i].id === vuelo2){
                                                flights.splice(i,1);
                                                    break;
                                            }
                                        }
    
                                    alert(JSON.stringify(flights));
                                        return alert('Vuelo eliminado... Gracias por confiar en Skylab Airlines...  ');
                                    }        

                                    if (!eliminar){
                                        return alert('Este vuelo no ha sido eliminado... Hasta luego, que tenga un buen día!!....');
                                    }                                                                   
                                    
                                }
                                eliminar()   
                            }
                            //eliminarVueloID();   
                        }
                        escala();    
                    }
                    precioVuelo();                        
                }
                cuidadDestino();       
            }
            ciudadOrigen();                 
        }    
        numeroID();            
    }
    crearVuelos();
}


//USER
//BUSCAR POR PRECIO Y COMPRAR VUELOS.
function user(){
    var total = [];

    function preguntar(){
        var dinero = prompt('Díganos el dinero que tiene disponible para comprar un vuelo.');
        var dinero = parseInt(dinero);  
        if(dinero){
            vuelosDisponibles();
        }

        if (isNaN(dinero) || dinero === '' || dinero ===  null){
            var continuar2 = confirm('Por favor, díganos el dinero que tiene disponible para comprar un vuelo... Desea continuar?'); 
            if(continuar2){
               preguntar()
            } else {
                return alert('Hasta luego, que tenga un buen día!!....');
            } 
        }
      
        //VUELOS DISPONIBLES.
        function vuelosDisponibles(){
        
        alert('A continuación, estos son los vuelos disponibles :');
        var precios = flights.filter((precio)=>(precio.cost <= dinero));       

    
        //PRECIOS VUELO(BARATO A CARO)
        var precioVuelo = precios.sort(function(precio1, precio2) {
            return precio1.cost - precio2.cost;
        }); 
    
        total.push(precioVuelo);
            for(let prices in precioVuelo){ 
                if(precioVuelo[prices].scale === true){
                alert(`El ID ${prices} tiene sus vuelos desde ${precioVuelo[prices].to.toUpperCase()} hasta ${precioVuelo[prices].from.toUpperCase()} con un precio de ${precioVuelo[prices].cost} € CON ESCALA.`);
                } else {
                    alert(`El ID ${prices} tiene sus vuelos desde ${precioVuelo[prices].to.toUpperCase()} hasta ${precioVuelo[prices].from.toUpperCase()} con un precio de ${precioVuelo[prices].cost} € SIN ESCALA.`);
                }
            }  
                
        }     

        //INDICAR ID
        function indicarID(){
        var numeroID = prompt('Ingrese el número de ID');
        var numeroID = parseInt(numeroID);
            if(numeroID){
            comprarVuelo();
            }

                if(isNaN(numeroID) || numeroID === '' || numeroID === null){
                    var seguir2 = confirm('Por favor, díganos el número de ID para comprar el vuelo disponible... Desea continuar?');
                    if(seguir2){
                    indicarID();
                    } else {
                        return alert('Hasta luego, que tenga un buen día!!....');
                    }        
                }

    
            function comprarVuelo(){
            const total = flights.find(numeroVuelo => numeroVuelo.id === numeroID);
            alert(JSON.stringify(total));
            var comprar = confirm('Desea comprar este vuelo?');
                if(comprar){
                    alert('Ha comprado el vuelo escogido.' + JSON.stringify(total))
                        alert('Gracias por su compra, vuelva pronto.... Gracias por confiar en Skylab Airlines... ')           
                } else {
                    alert('Hasta luego, que tenga un buen día!!....');        
                }

            }
        }
        indicarID()  
    }  
    preguntar()            
}

















































  




 







