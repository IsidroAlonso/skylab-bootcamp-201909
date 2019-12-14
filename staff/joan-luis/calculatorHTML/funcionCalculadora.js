var num1;
var num2;
var operador;

function init(){
   var resultado=document.getElementById('resultado');
   var reset=document.getElementById('clear');
   var retroceso=document.getElementById('recoil');
   var coma=document.getElementById('coma');
   var suma=document.getElementById('sum');
   var resta=document.getElementById('subtract');
   var multiplicacion=document.getElementById('multiply');
   var division=document.getElementById('division');
   var igual=document.getElementById('same');
   var one=document.getElementById('one');
   var two=document.getElementById('two');
   var three=document.getElementById('three');
   var four=document.getElementById('four');
   var five=document.getElementById('five');
   var six=document.getElementById('six');
   var seven=document.getElementById('seven');
   var eigth=document.getElementById('eigth');
   var nine=document.getElementById('nine');
   var zero=document.getElementById('zero');

   //events
    one.onclick=function(e){
       resultado.textContent=resultado.textContent + "1";
    };

    
    two.onclick=function(e){
        resultado.textContent=resultado.textContent + "2";
    };

    three.onclick=function(e){
        resultado.textContent=resultado.textContent + "3";
    };

    four.onclick=function(e){
        resultado.textContent=resultado.textContent + "4";
    };

    five.onclick=function(e){
        resultado.textContent=resultado.textContent + "5";
    };

    six.onclick=function(e){
        resultado.textContent=resultado.textContent + "6";
    };

    seven.onclick=function(e){
        resultado.textContent=resultado.textContent + "7";
    };

    eigth.onclick=function(e){
        resultado.textContent=resultado.textContent + "8";
    };

    nine.onclick=function(e){
        resultado.textContent=resultado.textContent + "9";
    };

    zero.onclick=function(e){
        resultado.textContent=resultado.textContent + "0";
    };

    coma.onclick=function(e){
        resultado.textContent= resultado.textContent + ".";
    };

    reset.onclick=function(e){
        cleanFunct();
    };

    suma.onclick=function(e){
        num1= resultado.textContent;
        operador=  "+";
        Limpiar(e);
    };

    resta.onclick=function(e){
        num1= resultado.textContent;
        operador=  "-";
        Limpiar(e);
    };

    multiplicacion.onclick=function(e){
        num1= resultado.textContent;
        operador=  "*";
        Limpiar(e);
    };

    division.onclick=function(e){
        num1= resultado.textContent;
        operador=  "/";
        Limpiar(e);
    };

    igual.onclick=function(e){
        num2=resultado.textContent;
        Resolver(e);
    };

    reset.onclick=function(e){
        cleanFunct(e);
    };

    retroceso.onclick=function(e){
        Retroceso(e);
    }

};

function Limpiar(e){
    resultado.textContent="";
}

function cleanFunct(e){
    resultado.textContent="";
    num1=0;
    num2=0;
    operador="";
};

function Retroceso(e){
    var auxNum=resultado.textContent;
    resultado.textContent= auxNum.slice(0,auxNum.length-1);
}

function Resolver(e){
    var res;
    debugger
    switch(operador){
        case "+":
            res=parseFloat(num1).toFixed(1) + parseFloat(num2).toFixed(1);
            break;
        case "-":
            res=parseFloat(num1).toFixed(1) - parseFloat(num2).toFixed(1);
            break;
        case "/":
            res=parseFloat(num1).toFixed(3) / parseFloat(num2).toFixed(3);
            break;
        case "*":
            res=parseFloat(num1).toFixed(1) * parseFloat(num2).toFixed(1);
            break;
        default:
            res=0;
            break;
    };
    cleanFunct(e);
    resultado.textContent=parseFloat(res);
};