 //Proyeto Aerolineas.

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

var MAX_FLIGHTS_REGISTER=15;

function register(auxFlights2) {
    
    if (auxFlights2.length>=15){
        alert("Database is complete");
        
    }else{
        //ask about new flight items
        codeFlight=prompt("Please introduce identification of flight:");
        destination=prompt("Please introduce destination of flight:");
        departure=prompt("Please introduce departure of flight:");
        costflifgt=prompt("Please introduce cost of flight:");
        scaleBoolean=prompt("This flight have scale? true o false");
        
        //set all items in object flights
        copiRegister(auxFlights2,codeFlight, destination, departure, costflifgt, scaleBoolean);

    }
};


function selectHigherPrice(auxFlights){
    auxFlights.sort(function(a,b){
        return (b.cost - a.cost);
    });
}

function selectLowerPrice(auxFlights){
    auxFlights.sort(function(a,b){
        return (a.cost - b.cost);
    });
   
};

function selectEqualsPrice(auxFlights, equalsFlights){
    
    var equalsFlights=[];
    var auxCost=[];
    for (var i=0;i<auxFlights.length-1;i++){
        for (var j=i+1; j<auxFlights.length;j++){
            if (auxFlights[i].cost==auxFlights[j].cost && auxFlights[i].id!==auxFlights[j].id){
                //copi all items the same cost
                auxCost=auxFlights[j].cost;
            };
        };
    };
    equalsFlights=auxFlights.filter(auxFlights=> auxFlights.cost===auxCost);
    printFlights(equalsFlights);
    
};

function copiRegister(auxFlights, id, to, from, cost, scale){
    var codeFlight=id;
    var destination=to;
    var departure=from;
    var costflifgt=cost;
    var scaleBoolean=scale;
    
    
    auxFlights.push({id:parseInt(codeFlight), to:destination, from:departure, cost: parseInt(costflifgt), scale:scaleBoolean});
};

function selectFlightByPrice(auxFlights,typeFlight){
    
    if(typeFlight=="h"){
        
        selectHigherPrice(auxFlights);
        console.log("Higher Prices");
        printFlights(auxFlights);

    }else if(typeFlight=="l"){
        selectLowerPrice(auxFlights);
        console.log("Higher Prices");
        //print all flights 
        printFlights(auxFlights);
    }else if("e"){
        console.log("Equals Prices");
        selectEqualsPrice(auxFlights);
    };
};

function printFlights(auxFlights){
    //Print all flights we have
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    console.log("^   LIST OF FLIGHTS TODAY    ^");
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    for (i=0; i<auxFlights.length;i++){
        console.log("flight number: "+ auxFlights[i].id + " from: "+auxFlights[i].from + " to: "+ auxFlights[i].to+ " Cost: "+auxFlights[i].cost + " with scale: "+ auxFlights[i].scale);
        console.log("---------------------------------------------");
    };
};

function printLastFlights(auxFlights,numToprint){
    var numberPrinting=0;
    numberPrinting= auxFlights.length-numToprint;
    for (i=numberPrinting;i<auxFlights.length;i++){
        printOneFlight(auxFlights,i);
    };
    console.log("{ Fined List }");
};



function printOneFlight(auxFlights,idx){
    var auxIdx=parseInt(idx);
    console.log("flight number: "+ auxFlights[auxIdx].id + " from: "+auxFlights[auxIdx].from + " to: "+ auxFlights[auxIdx].to+ " Cost: "+auxFlights[auxIdx].cost + " with scale: "+ auxFlights[auxIdx].scale);
    console.log("---------------------------------------------");
};
 


function buyFlight(auxFlights,idx){
    var indexIdFlight= 0;
    var indexIdFlight= parseInt(idx);
    

    if (auxFlights.find(auxFlights => auxFlights.id===indexIdFlight)){
        for(i=0; i< auxFlights.length; i++){
            if (auxFlights[i].id==indexIdFlight){
                printOneFlight(auxFlights,i);
                console.log("Thank you for your buy"); 
            }
        }
       
    }else{
        alert("This flight not exist, it can't buy it");
    };
};

function avarageFlight(auxFlights){
    var auxAvarage=0, average=0;

    for (var i=0; i< auxFlights.length; i++){
        auxAvarage=parseFloat(auxAvarage) + parseFloat(auxFlights[i].cost);
    };
    
    average= parseFloat(auxAvarage).toFixed(3) / parseFloat(auxFlights.length).toFixed(3);
    
   return parseFloat(average).toFixed(3);
};

function deleteFlight(auxFlights,idx){
    var indexIdFlight=0;
    var idDelete=parseInt(idx);
    

    if (auxFlights.find(auxFlights => auxFlights.id===idDelete)){
        indexIdFlight=auxFlights.indexOf(idDelete);
        auxFlights.splice(indexIdFlight,1);
    }else{
        alert("This flight not exist, it can't remove");
    };
};

function selectbyScale(auxFlights){
    for (var i=0; i< auxFlights.length; i++){
        if (auxFlights[i].scale==true){
        printFlight(i);
        };   
    };
};

function airlinesBasic(auxFlights){

    var avarage=0;
    var userName= prompt("Could you introduce your name, please?");
    console.log("Belcome to aerolines Sr "+ userName);
    printFlights(auxFlights);
    avarage=avarageFlight(auxFlights);
    console.log("ººººººººººººººººººººººººººººººººººººººººººº");
    console.log("| The avarage of all flights its: "+avarage + " |");
    console.log("ººººººººººººººººººººººººººººººººººººººººººº");
    console.log("                               ");
    console.log("[ The last five flights ]");
    printLastFlights(auxFlights,5);
};

// airlines Pro
function airlinesPro(auxFlights){
    //implementar amb les opcions PRO
    
    var typeUser=prompt("Are you administrator or user? (admin-user");
    if (typeUser=="user"){
        userOpt(auxFlights);
    }else if (typeUser=="admin"){
        administerOpt(auxFlights);
    };

}


function administerOpt(auxFlights){
    //option administer PRO
    console.log("you are a administrator");
    var optAltaBaja=prompt("Choose the option you want, Register-r flights or Delete-d");
     
    if (optAltaBaja=="r"){ //new flight
        if (auxFlights.length>=MAX_FLIGHTS_REGISTER){
             alert ("We can't register any flight, the Database is complete");// If the array have a maximun elements, warm
        }else{
            var optAlta=confirm("Do you want register a new flight");// ask if you want a create a new flight
            while (optAlta==true && auxFlights.length<=15){
            register(auxFlights);
            var optAlta=confirm("Do you want register a new flight");    
            };
        }; 
          
    }else if (optAltaBaja=="d"){
            
        var idDelete=parseInt(prompt("Enter the flight code you want to remove"));
        deleteFlight(auxFlights,idDelete)     
        
        console.log("************************************");
        console.log("The flight code "+ idDelete + " was removed");
            
    };
    printFlights(auxFlights);
};

function userOpt(auxFlights){
//option user PRO
    var selection=prompt("Search flight by price: Higher-h; Lower-l; Equal-e");
    selectFlightByPrice(auxFlights,selection);
    var buyTicked=prompt("Enter the flight code to buy");

    buyFlight(auxFlights,buyTicked);
    
};

// manage basic and PRO ailines
function airlines(auxFlights){
    airlinesBasic(auxFlights);
    airlinesPro(auxFlights);
};

airlines(flights);
