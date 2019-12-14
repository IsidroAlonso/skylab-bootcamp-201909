let param1 = 0;
let param2 = 0;
let operar;

function mostrarPorPantalla(){
    document.getElementById("ventanaresultado").value = param1;
}
function introNumero(numero){
 if(param1==0 && param1 !== '0.'){
     param1 = numero;
 }else{
     param1 += numero;
 }
 mostrarPorPantalla();
}

function coma(){
 if(param1 == 0) {
     param1 = '0.';
 } else if(param1.indexOf('.') == -1) {
     param1 += '.';
 }
 mostrarPorPantalla();
}

function borrarTodo(){
 param1 = 0;
 param2 = 0;
 mostrarPorPantalla();
}

function retroceder(){
param1 = param1.slice(0,-1);
mostrarPorPantalla();
}

function operacion(valor){
 if (param1 == 0){
     param1 = parseFloat(document.getElementById("ventanaresultado").value);
 }
 param2 = parseFloat(param1);
 param1= 0;
 operar = valor;
}

function resultado(){
if (operar == null) return;
 param1 = parseFloat(param1);
 switch (operar){
     case 'sumar':
         param1 += param2;
     break;
     case 'restar':
         param1 = param2 - param1;
     break;
     case 'multiplicar':
         param1 *= param2;
     break;
     case 'division':
         param1 = param2 / param1;
     break;
    }
mostrarPorPantalla();
 param2 = parseFloat(param1);
 param1 = 0;
 operar = null;
}
