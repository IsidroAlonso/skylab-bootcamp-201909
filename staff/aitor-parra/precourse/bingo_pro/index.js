
//BINGO GAME! 🎲🎰

// EL CÓDIGO SE EJECUTA CON LA FUNCIÓN ->   Bingo() 


var players = [];
var numPartidas = 0;
var arrRanking = [];
//var numberCounter = [];
var puntos = 0;
var playerCounter = 0;
var carton1 = [];
var carton2 = [];
var carton3 = [];
//var carton = [2, 7, 9, 5, 8];
var cartonLineaX = ['X','X','X','X','X'];
var numberShowed = [];
var numberCounter = 0;
var firstLineEnd = false;
var secondLineEnd = false;
var thirdLineEnd = false;
var bingoEnd = false;


function cartonGen () { 
    while (carton1.length < 5 || carton2.length < 5 || carton3.length < 5) {
    carton1.push(Math.floor(Math.random() * 40.3));
    carton2.push(Math.floor(Math.random() * 40.6));
    carton3.push(Math.floor(Math.random() * 40.9));
}
}

function acceptCarton(){
    var acceptCart = confirm('Tu cartón de juego tiene los números:\n' + '1a Línea -> ' + carton1 + '\n2a Línea -> ' + carton2 + '\n3a Línea -> ' + carton3 + '\n¿Quieres usar éste cartón?');
    switch(acceptCart){
        case true:
            checkCarton();
            askTurn(); 
        break;
        case false:
            carton1 = [];
            carton2 = [];
            carton3 = [];
            cartonGen();
                acceptCarton();
        break;
        default:
        break;
    }
}

function jugador(){
playerCounter++
player = prompt('¡Tenemos un nuevo jugador!\n¿Cuál es tu nombre?');
alert('¡Bienvenido a SkyLab Bingo, ' + player.toUpperCase() + 
'!\nPuntuación al hacer Bingo:\nmenos de 10 turnos-> 100p\nde 10 a 50 turnos-> 75p\nde 50 a 70 turnos -> 50p\nde 70 a 90 turnos-> 25p\nde 90 a 120 turnos-> 15p' + 
'\nde 120 a 150 turnos-> 10p\nmás de 150 turnos-> 5p.');
cartonGen();
    acceptCarton();
}

function playersData (name, turns, points) {
        return {
          name:name,
          turns:turns,
          points: points}
    }

function ranking() {
        
        players.sort(function(a, b) {return b.points-a.points});
        for (j in players){
            arrRanking.push('\nRANKING:\n\n ' + players[j]["name"].toUpperCase() + ' con ' + players[j].points + ' puntos.');}
            alert(arrRanking)
        
        endGameNoWin();
    }

function numRandom(){
     number = Math.floor(Math.random() * 40);
     numberShowed.push(number);
     numberCounter++;
     alert('Ha salido el número: ' + number);
	 return;
}

function checkCarton() {
           
    if (carton1.toString() === cartonLineaX.toString() && firstLineEnd === false) {
        firstLineWin();
    } 
    
    if (carton2.toString() === cartonLineaX.toString() && secondLineEnd === false) {
        secondLineWin();
    } 

    if (carton3.toString() === cartonLineaX.toString() && thirdLineEnd === false) {
        thirdLineWin();
    } 
    

    if (firstLineEnd === true && secondLineEnd === true && thirdLineEnd === true) {
        alert('¡BIIINGOOOO!\n¡Felicidades!\nHiciste BINGO en ' + numberCounter + ' turnos.');
        bingoEnd = true;
        puntuacion();
        
        players[numPartidas] = playersData(player, numberCounter, puntos);
        numPartidas++;
        bingoWin();
    }
}

function askTurn(){
    var turno = confirm('El estado del carton es: \n1a Línea-> ' + carton1 + '\n2a Línea-> ' + carton2 + '\n3a Línea-> ' + carton3 +'\n¿Quieres jugar un turno?');
    
    if (turno === true) {
        newTurn();
    } else if(turno === false) {
        endGameNoWin();
    }
}


function matchNumber1(){
    for (var q = 0 ; q <= carton1.length ; q++) {
        if (carton1[q] === number) {
            alert('El número ' + number + ' de primera línea ha dado match!'); 
            carton1[q] = 'X'; 
        }
    }
}  
function matchNumber2(){    
    for (var w = 0 ; w <= carton2.length ; w++) {
        if (carton2[w] === number) {
            alert('El número ' + number + ' de segunda línea ha dado match!'); 
            carton2[w] = 'X';
        } 
    } 
}

function matchNumber3(){    
    for (var e = 0 ; e <= carton3.length ; e++) {
        if (carton3[e] === number) {
            alert('El número ' + number + ' de tercera línea ha dado match!'); 
            carton3[e] = 'X';
        } 
    } 
}


function newTurn() {
    numRandom();
        matchNumber1();
            matchNumber2();
                matchNumber3();
                    checkCarton();
                    if (bingoEnd === false){
                    askTurn(); }
}

function firstLineWin() {
    
    if (firstLineEnd === false){
    alert('¡Hiciste LÍNEA!\n¡Felicidades!');
    alert('Jugaste e hiciste la primera LÍNEA en ' + numberCounter + ' turnos');
    firstLineEnd = true;
   
}}

function secondLineWin() {

    if (secondLineEnd === false) {
    alert('¡Hiciste LÍNEA!\n¡Felicidades!');
    alert('Jugaste e hiciste la segunda LÍNEA en ' + numberCounter + ' turnos');
    secondLineEnd = true;
    
}}

function thirdLineWin() {

    if (thirdLineEnd === false) {
    alert('¡Hiciste LÍNEA!\n¡Felicidades!');
    alert('Jugaste e hiciste la segunda LÍNEA en ' + numberCounter + ' turnos');
    thirdLineEnd = true;
        
}}

function nuevaPartida(){
            
    resetGame();
        Bingo();
}

function bingoWin() {
    
    var opcion = Number(prompt('Presiona:\n[1] para ver el ranking de puntos\n[2] para jugar una nueva partida\n[3] para salir del juego.'));
    switch(opcion) {
        case 1:
            ranking();
            break;
        case 2:
            nuevaPartida();
            break;
        case 3:
            endGameNoWin();
            break;
        default:
            alert('Bye Bye');
            break;
    }  
}


function resetGame() {  
carton1 = [];
carton2 = [];
carton3 = [];
numberShowed = [];
numberCounter = 0;
puntos = 0;
firstLineEnd = false;
secondLineEnd = false;
thirdLineEnd = false;
bingoEnd = false;
}

function endGameNoWin() {
    alert('Ciao!');
}

function puntuacion() {

    if (numberCounter <= 10) {
        puntos = 100;
      } else if (numberCounter > 10 && numberCounter <= 50) {
        puntos = 75;
      } else if (numberCounter > 50 && numberCounter <= 70) {
        puntos = 50;
      } else if (numberCounter > 70 && numberCounter <= 90) {
        puntos = 25;
      } else if (numberCounter > 90 && numberCounter <= 120) {
        puntos = 15;
      } else if (numberCounter > 120 && numberCounter <= 150) {
        puntos = 10;
      } else {
        puntos = 5;
      }   
}

function Bingo(){
    jugador();                
}

