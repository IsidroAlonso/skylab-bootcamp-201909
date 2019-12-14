/*Requisitos de la versión mínima:
Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, eso ya lo solucionaremos. Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado
Separarlo todo en funciones, englobado en una función global llamada bingo(), tal que:
*/

var playerCounter = 0;
var playerS = []
var firstLineEnd = false;
var nuevoTurno = false;
var numberCounter = 0;
var bingoCardMod = [11,2,3,17,9];
var numberShowed = [];

var bingoCard = [
    { number: 11, matched: false },
    { number: 2, matched: false },
    { number: 3, matched: false },
    { number: 17, matched: false },
    { number: 9, matched: false }
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
    playerS.push(player)
    alert('¡Bienvenido a SkyLab Bingo, ' + player.toUpperCase() + '!' + 
    '\nSu cartón : ' + bingoCard[0]['number'] + '-' + bingoCard[1]['number'] + '-' + bingoCard[2]['number'] + '-' + bingoCard[3]['number'] + '-' + bingoCard[4]['number']);


}

function numRandom(){
    number = Math.floor(Math.random() * 20);
    numberCounter++;
    numberShowed.push(number);
    alert('Ha salido el número: ' + number);
    return;

}

function matchNumber(){
    for (var q = 0 ; q < bingoCard.length ; q++) {
        if (bingoCard[q]['number'] === number) {
            bingoCard[q]['matched'] = true;
            bingoCardMod[q] = 'X';
        }
    }

}  


function askTurn() {
    alert('El estado actual de su carton es: ' + bingoCardMod);  
    if (bingoCard[0].matched === true && bingoCard[1].matched === true && bingoCard[2].matched === true && bingoCard[3].matched === true && bingoCard[4].matched === true && firstLineEnd === false) {
        firstLineWin();
        } else {
            nuevoTurno = confirm('¿Quiere jugar un turno?')
            if (nuevoTurno === true) {
                newTurn();
            } else if (nuevoTurno === false) {
                endGameNoWin();
            }
            
        }}


function firstLineWin() {
        alert('¡Hiciste LÍNEA y BINGO!\n¡Felicidades!\nJugaste e hiciste LÍNEA y BINGO en ' + numberCounter + ' turnos.');
        firstLineEnd = true; 
        alert('Ciao!');     
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
