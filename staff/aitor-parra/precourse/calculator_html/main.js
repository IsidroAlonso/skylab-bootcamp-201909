//variables que toman los elementos por id
const screenRes = document.getElementById("screen");
const acButton = document.getElementById("ac");
const backrowButton = document.getElementById("backrow");
const sevenButton = document.getElementById("seven");
const eightButton =document.getElementById("eight");
const nineButton = document.getElementById("nine");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const zeroButton = document.getElementById("zero");
const comaButton = document.getElementById("coma");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const equalButton = document.getElementById("equal");

//funciones que se ejecutan al producirse un evento
function acPush() {screenRes.innerHTML = '0'; operation = "";}
function backrowPush() {screenRes.innerHTML = resultadoAcumulado;}

function sevenPush() {screenRes.innerHTML = 7; if (operation == "") {valor1 = 7;} else { valor2 = 7}}
function eightPush() {screenRes.innerHTML = 8; if (operation == "") {valor1 = 8;} else { valor2 = 8}};
function ninePush() {screenRes.innerHTML = 9; if (operation == "") {valor1 = 9} else {valor2 = 9};}
function fourPush() {screenRes.innerHTML = 4; if (operation == "") {valor1 = 4} else {valor2 = 4}};
function fivePush() {screenRes.innerHTML = 5; if (operation == "") {valor1 = 5} else {valor2 = 5}};
function sixPush() {screenRes.innerHTML = 6; if (operation == "") {valor1 = 6} else {valor2 = 6}};
function onePush() {screenRes.innerHTML = 1; if (operation == "") {valor1 = 1} else {valor2 = 1}};
function twoPush() {screenRes.innerHTML = 2; if (operation == "") {valor1 = 2} else {valor2 = 2}};
function threePush() {screenRes.innerHTML = 3; if (operation == "") {valor1 = 3} else {valor2 = 3}};
function zeroPush() {screenRes.innerHTML = 0; if (operation == "") {valor1 = 0} else {valor2 = 0};};
/* a resoldre */function comaPush() {screenRes.innerHTML = ','};


function dividePush() {
    operation = "divide";
}
function multiplyPush() {
    operation = "multiply";
}
function minusPush() {
    operation = "minus";
}
function plusPush() {
    operation = "plus";
}

function equalPush() {
   switch(operation) {
        case "divide":
            divide();
            screenRes.innerHTML = dividir;
            break;
        case "multiply":
            multi();
            screenRes.innerHTML = multiplicar;
            break;
        case "minus":
            resta();
            screenRes.innerHTML = restar;
            break;       
        case "plus":
            plus();
            screenRes.innerHTML = sumar;
            break;
        default:
            screenRes.innerHTML = "9999";
            break;
   }; 
   
   };


//gestion de eventos al hacer click en id 
acButton.addEventListener('click', acPush);
backrowButton.addEventListener('click', backrowPush);
sevenButton.addEventListener('click', sevenPush);
eightButton.addEventListener('click', eightPush);
nineButton.addEventListener('click', ninePush);
fourButton.addEventListener('click', fourPush);
fiveButton.addEventListener('click', fivePush);
sixButton.addEventListener('click', sixPush);
oneButton.addEventListener('click', onePush);
twoButton.addEventListener('click', twoPush);
threeButton.addEventListener('click', threePush);
zeroButton.addEventListener('click', zeroPush);
comaButton.addEventListener('click', comaPush);
divideButton.addEventListener('click', dividePush);
multiplyButton.addEventListener('click', multiplyPush);
minusButton.addEventListener('click', minusPush);
plusButton.addEventListener('click', plusPush);
equalButton.addEventListener('click', equalPush);


//Variables 
var valor1 = 0;
var valor2 = 0;
var operation = "";
var sumar = 0;
var dividir = 0;
var multiplicar = 0;
var restar = 0;
var resultadoAcumulado = 0;

    
// Introduzco las funciones que nos calcularan los resultados.
        
function plus() {return sumar = valor1 + valor2;}
function resta() {return restar = valor1 - valor2;}
function multi() {return multiplicar = valor11 * valor2;}        
function divide() {return dividir = valor1 / valor2;}
function resacum() {return resultadoAcumulado = sumar + dividir + multiplicar + restar}
    
/*// Añado los valores de las 4 funciones al array 'arrResult'.
        
    arrResult[0] = suma(num1, num2); 
     arrResult[1] = resta(num1, num2);
        arrResult[2] = multi(num1, num2);
         arrResult[3] = divide(num1, num2);
    */
