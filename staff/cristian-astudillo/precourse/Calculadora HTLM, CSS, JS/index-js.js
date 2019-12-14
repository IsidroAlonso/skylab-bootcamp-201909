'use strict';

var title = document.getElementById("title");
title.innerHTML = "Calculadora <h1>Skylab HTML - CSS - JS</h1>";
title.style.fontSize = "30px"


//GetElementById()
const screenOperations = document.getElementById("screenOperations");
const screenTotal = document.getElementById("screenTotal");
const buttons = document.getElementById("buttons");

//addEventListener('click')
buttons.addEventListener('click', (e)=>{   
    if(e.target.textContent !== '') { 
        switch(e.target.textContent) {            
            case '=' : results();
            break;
            case "AC" : clear();
            break;
            case "," : operation('.');
            break;
            default : operation(e.target.textContent);
            break;
        }
    }
});

//INSERTAR NÚMEROS
const operation = nums => {    
    if(screenTotal.textContent == 0) screenTotal.textContent = ''; 
    screenTotal.textContent += nums;     
}

//MOSTRAR RESULTADOS
const results = () => {   
     screenTotal.textContent = eval(screenTotal.textContent); 
}

//RESETEAR PANTALLA
var clear = () => {   
    screenTotal.textContent = '0';
}



