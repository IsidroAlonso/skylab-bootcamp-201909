// Project calculator-PRO
var arrayResults= [{number:0, operation:""}];
var arrayElements= [];




function suma (arrayElements,arrayResults){
    // suma  numeros pasados por el array
  
   var total=0;
   var subtotal=0;

   for (var i=0; i<arrayElements.length;i++){
        subtotal=arrayElements[i];
        total=parseInt(total)+parseInt(subtotal);
   }
   arrayResults.push({number:total, operation:"suma"});
   
}

function resta (arrayElements, arrayResults){
    //resta numeros pasados por el array
    var total=0;
    var subtotal=0;

    for (var i=0; i<arrayElements.length;i++){
        subtotal=arrayElements[i];
        total=parseInt(total)- parseInt(subtotal);
    }
  
    arrayResults.push({number:total, operation:"substract"});
    
}

function mult (arrayElements,arrayResults){
    //multiplicacion numeros pasados por el array
    var total=1;
    var subtotal=0;

    for (var i=0; i<arrayElements.length;i++){
        subtotal=arrayElements[i];
        total=parseInt(total) * parseInt(subtotal);
    }
    arrayResults.push({number:total, operation:"Multiplication"});
    
}

function div (arrayElements,arrayResults){
    //division numeros pasados por el array
 
    var subtotal=0;
    var total=0;
    subtotal=parseFloat(arrayElements[0]).toFixed(3);
    if (subtotal==0){
        arrayElements.push({number:0, operation: "division"});
            
    }else{
        total=subtotal;
        for (var i=1; i<arrayElements.length;i++){
            subtotal=parseFloat(arrayElements[i]).toFixed(3);
            if (subtotal>0){
                total= parseFloat(total).toFixed(3) / parseFloat(subtotal).toFixed(3);
            }else if (subtotal<=0){
                arrayElements.push({number:0, operation: "division"});
                alert(" Can not be divide by zero");
            }
        }

    }  
    
    arrayResults.push({number:total, operation:"Division"});
   
}

function myRoot(arrayElements,arrayResults){
    
    var subtotal=0;
    var total=0;
    subtotal=parseInt(arrayElements[0]);
    total=Math.sqrt(subtotal);
    arrayResults.push({number:total, operation:"root"});
}

// Creamos la funcion de seleccion de tipo de operacion
function operation (){
    
    var auxNum;
    var numElements=parseInt(prompt("Enter number of elements to operation"));
    if (numElements==1){
        auxNum=prompt(" Enter de firts number that you want calculate");
        arrayElements.push(parseInt(auxNum));
    }else if (numElements<=0){
        alert("insufficient elements to calculate");

    }else{
        for (var i=0; i<numElements;i++){
            auxNum=prompt(" Enter de firts number that you want calculate");
            arrayElements.push(parseFloat(auxNum).toFixed(3));
        }
    }

    
}

function printElements(arrayElements){
    debugger;
    for (i=0; i<arrayElements.length;i++){
        console.log(" the elements " + (i+1) + " is: " + arrayElements[i]);
    }
}

function printRsults(arrayResults){
    for (i=0; i<arrayResults.length;i++){
        console.log(" the result of " + arrayResults[i].operation + " is " + arrayResults[i].number)
    }
}


function CalculatroPro(arrayElements,arrayResults){
    operation();
    printElements(arrayElements);

    if (arrayElements.length==1){
        myRoot(arrayElements,arrayResults);

    }else if(arrayElements.length>1){
        suma(arrayElements,arrayResults);
        resta(arrayElements,arrayResults);
        mult(arrayElements,arrayResults);
        div(arrayElements,arrayResults);
    }

    printRsults(arrayResults);
}

CalculatroPro(arrayElements,arrayResults);
