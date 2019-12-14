// EL CÓDIGO SE EJECUTA CON LA FUNCIÓN ->   Bingo() 

var carton = [2, 7, 9, 5, 8];
var cartonModificado = [];
var cartonLinea = ['X','X','X','X','X'];
var numberShowed = [];
var numberCounter = 0;

function jugador(){

var player = prompt('¡Tenemos un nuevo jugador!\n¿Cuál es tu nombre?');
alert('¡Bienvenido a SkyLab Bingo, ' + player.toUpperCase() + '!');
alert('Tu cartón de juego tiene los números: ' + carton);
}

function numRandom(){
     number = Math.floor(Math.random() * 10);
     numberShowed.push(number);
     numberCounter++;
     alert('Ha salido el número: ' + number);
	 return;

}

function askTurn() {

    if (carton.toString() === cartonLinea.toString()) {
        endGameWin();
    } else {
        var turno = confirm('¿Quieres jugar un turno?');
        if (turno === true) {
            alert('Tu carton actual es: ' + carton)
            newTurn();
        } else {
            endGameNoWin();
        }
    } 
}

function matchNumber(){
    for (var q = 0 ; q <= carton.length ; q++) {
        if (carton[q] === number) {
            alert('El número: ' + carton[q] + ' ha dado match!'); 
            carton[q] = 'X';
            
        } 
    } 
}

function newTurn() {
    numRandom();
        matchNumber();
            askTurn();

}

function endGameWin() {
    alert('¡Hiciste LÍNEA!\n¡Felicidades!');
    alert('Jugaste e hiciste LÍNEA en ' + numberCounter + ' turnos')
}


function endGameNoWin() {
    alert('Ciao!');
}


function Bingo(){
    jugador();
        askTurn();          
}




