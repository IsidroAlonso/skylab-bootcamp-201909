//BINGO versión 15 números no aleatorios.

// EL CÓDIGO SE EJECUTA CON LA FUNCIÓN ->   Bingo() 


var playerCounter = 0;
var playerSbingo = []
var firstLineEnd = false;
var secondLineEnd = false;
var thirdLineEnd = false;
var bingoLine = false;
var nuevoTurno = false;
var numberCounter = 0;
var bingoCardMod = [[11, 2, 3, 17, 9],[19, 33, 36, 37, 39],[22, 25, 15, 12, 1]];
var numberShowed = [];

var bingoCard = [
    [{ number: 11, matched: false }, { number: 2, matched: false }, { number: 3, matched: false }, { number: 17, matched: false },{ number: 9, matched: false }],
    [{ number: 19, matched: false }, { number: 33, matched: false }, { number: 36, matched: false }, { number: 37, matched: false },{ number: 39, matched: false }],
    [{ number: 22, matched: false }, { number: 25, matched: false }, { number: 15, matched: false }, { number: 12, matched: false },{ number: 1, matched: false }]
]


/*function cartonGen () { 
    for (var y = 0 ; y < bingoCard.length ; y++) {
    bingoCard[y]['number'] = Math.floor(Math.random() * 20);
    }
  return;
}*/

function jugador(){
    playerCounter++
    player = prompt('¡Tenemos un nuevo jugador!\n¿Cuál es tu nombre?');
    playerSbingo
.push(player)
    alert('¡Bienvenido a SkyLab Bingo, ' + player.toUpperCase() + '!' + 
    '\nSu cartón tiene 3 líneas de 5 números cada una con valores entre 0 y 40:\n ' 
    + '\n1a línea: ' + bingoCardMod[0][0] + '-' + bingoCardMod[0][1] + '-' + bingoCardMod[0][2] + '-' + bingoCardMod[0][3] + '-' + bingoCardMod[0][4]
    + '\n2a línea: ' + bingoCardMod[1][0] + '-' + bingoCardMod[1][1] + '-' + bingoCardMod[1][2] + '-' + bingoCardMod[1][3] + '-' + bingoCardMod[1][4]
    + '\n3a línea: ' + bingoCardMod[2][0] + '-' + bingoCardMod[2][1] + '-' + bingoCardMod[2][2] + '-' + bingoCardMod[2][3] + '-' + bingoCardMod[2][4]);
}

function numRandom(){
    number = Math.floor(Math.random() * 40);
    numberCounter++;
    numberShowed.push(number);
    alert('Ha salido el número: ' + number);
    return;
}

function matchNumber(){
    for (var q = 0 ; q < bingoCard.length ; q++) {
      for (var h = 0 ; h < 5 ; h++) {
        if (bingoCard[q][h].number === number) {
            bingoCard[q][h].matched = true;
            bingoCardMod[q][h] = 'X';
            }
        }
    }
}   


function askTurn() {
    alert('El estado actual de su carton es: ' 
    + '\n1a línea: ' + bingoCardMod[0][0] + '-' + bingoCardMod[0][1] + '-' + bingoCardMod[0][2] + '-' + bingoCardMod[0][3] + '-' + bingoCardMod[0][4]
    + '\n2a línea: ' + bingoCardMod[1][0] + '-' + bingoCardMod[1][1] + '-' + bingoCardMod[1][2] + '-' + bingoCardMod[1][3] + '-' + bingoCardMod[1][4]
    + '\n3a línea: ' + bingoCardMod[2][0] + '-' + bingoCardMod[2][1] + '-' + bingoCardMod[2][2] + '-' + bingoCardMod[2][3] + '-' + bingoCardMod[2][4]);  

    if (bingoCard[0][0].matched === true && bingoCard[0][1].matched === true && bingoCard[0][2].matched === true && bingoCard[0][3].matched === true && bingoCard[0][4].matched === true && firstLineEnd === false) {
        firstLineWin();
        } 
    if (bingoCard[1][0].matched === true && bingoCard[1][1].matched === true && bingoCard[1][2].matched === true && bingoCard[1][3].matched === true && bingoCard[1][4].matched === true && secondLineEnd === false) {
        secondLineWin();
        } 
    if (bingoCard[2][0].matched === true && bingoCard[2][1].matched === true && bingoCard[2][2].matched === true && bingoCard[2][3].matched === true && bingoCard[2][4].matched === true && thirdLineEnd === false) {
        thirdLineWin();
        } 
        
    if (firstLineEnd === true && secondLineEnd === true && thirdLineEnd === true) {
        bingoWin();
    }
        
    if (bingoLine === false) {
            nuevoTurno = confirm('¿Quiere jugar un turno?')
            if (nuevoTurno === true) {
                newTurn();
            } else if (nuevoTurno === false) {
                endGameNoWin();
            }
            
        } else {endGameNoWin();}
    }


function firstLineWin() {
    if (firstLineEnd === false && secondLineEnd === false && thirdLineEnd === false) {
    alert('¡LÍNEAAAA!\n¡Felicidades!\nJugaste e hiciste la primera LÍNEA en ' + numberCounter + ' turnos.');}
    firstLineEnd = true;     
}

function secondLineWin() {
    if (firstLineEnd === false && secondLineEnd === false && thirdLineEnd === false) {
    alert('¡LÍNEAAAA!\n¡Felicidades!\nJugaste e hiciste la segunda LÍNEA en ' + numberCounter + ' turnos.');}
    secondLineEnd = true;        
}

function thirdLineWin() {
    if (firstLineEnd === false && secondLineEnd === false && thirdLineEnd === false){
    alert('¡LÍNEAAAA!\n¡Felicidades!\nJugaste e hiciste la tercera LÍNEA en ' + numberCounter + ' turnos.');}
    thirdLineEnd = true;         
}

function bingoWin() {
    alert('¡BIINGOOOO!\n¡Felicidades' + player + '!\nJugaste e hiciste BINGO en ' + numberCounter + ' turnos.\nHasta la próxima!');
    bingoLine = true;

}


function endGameNoWin() {
    alert('Ciao!');
}

function newTurn() {
    numRandom();
        matchNumber();
            askTurn();

}

function Bingo(){
    jugador();
        askTurn();          
}
