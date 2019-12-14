// bingo
/*
Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse
Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), 
    para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizandose otro número, 
    si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0.
El cartón se mostrará, al final de cada turno, con los cambios efectuados, 
    indicando al usuario qué número se ha encontrado.
El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, 
    en caso de que se continúe, seguirá el mismo patrón que hasta el momento.
Cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", 
    pero la ejecución seguirá, el juego solo acabará cuando todos los números estén a "X".
*/

const thanksBye = `¡Gracias por jugar! ¡Adiós!`; 
const randomNumLimit = 49; // aquí cambiamos la cantidad de números que entran en el cartón y el bombo
let cardNumsTaken = []; // cuenta que los numeros del cartón no se repitan
let turnNumsTaken = []; // cuenta que en cada turno los números no se repitan
let numOfCompleteLines = 0; // cuenta las líneas completadas
let isBingo = false; // se activará a true cuando se llegue a bingo
let turnCounter = 0; // cuenta el número de turnos

function getCard(rows, squares) { // el cartón del bingo
	rows = 3; // el cartón se rellenará con el número de filas que se quiera
	squares = 5; // cada fila se rellenará con el número de cifras que se quiera
	let arrayCard = [];
	for(let i = 0; i < rows; i++) {
    	arrayCard[i] = [];
		for(let j = 0; j < squares; j++) {
			arrayCard[i][j] = getNewNumber(cardNumsTaken);
		}
	}
return arrayCard;
}
let card = getCard();

function randomNum() { // genera el número aleatorio a partir del 1
	return Math.round((Math.random()*randomNumLimit)+1);
} 

function getNewNumber(numsArray) { //esto hace que cuando salga un nuevo número del cartón o del bombo no se repita
	const newRdm = randomNum();
    const isTaken = numsArray.find(num => num === newRdm);
    if (isTaken) return getNewNumber(numsArray);
    numsArray.push(newRdm);
    return newRdm;
}

function welcome(userName) {
    userName = prompt(`¡Bienvenido a jsBingo!\nPor favor, introduce tu nombre antes de empezar`, `Jugador`);
	userName !== null && userName !== ``? alert(`¡A jugar, ${userName}!`) + beginGame() : alert(`¡A jugar!`) + beginGame();
}

function beginGame() {
	isBingo = false; // devuelve todos los valores a su valor inicial si se realiza una nueva partida
	cardNumsTaken = [];
	turnNumsTaken = [];
	numOfCompleteLines = 0;
	turnCounter = 0;
	card = getCard();
	console.table(card); // te muestra el cartón en forma de tabla
    confirm(`¿Comenzar el Bingo?`) ?  nextTurn() : alert(thanksBye);
}

function nextTurn() { // cada número marcado o línea enseña la card modificada
	const numOfTurn = getNewNumber(turnNumsTaken);
	alert(`Ha salido el número ${numOfTurn}`);
	checkIfNumIsInCard(numOfTurn);
	turnCounter++;
	console.log(`Turnos: `, turnCounter);
	isBingo = checkIfBingo();
	if(isBingo) return youWin();
	confirm(`¿Pasar al siguiente turno?`) ? nextTurn() : alert(thanksBye);
}

function checkIfNumIsInCard(numToCheck) {
    for(let i = 0; i < card.length; i++) {
		const currentRow = card[i];
		for(let j = 0; j < currentRow.length; j++) {
			if (numToCheck === currentRow[j]) {
				currentRow[j] = `X`;
				alert(`¡Este número está en tu cartón!\nLo marcamos`)
				console.table(card);
				const isLine = checkIfLine(currentRow);
				if (isLine) {
					numOfCompleteLines++;
					if (!checkIfBingo() && numOfCompleteLines === 1) alert(`¡LÍNEA!`);  // solo cantará línea si es la primera vez
				};
			}
		}
	}
}

function checkIfLine(rowToCheck) { // te comprueba si hay línea, para ello te mira si toda la fila tiene algún número, si no, es que hay línea ya que los números se sustituyen por X
	return !rowToCheck.find(square => typeof square === `number`);
}

function checkIfBingo() { // si el número de líneas completadas coincide con el número de líneas
	return numOfCompleteLines === card.length;
}

function youWin() {
	alert(`¡¡BINGO!!\n¡Has ganado en ${turnCounter} turnos!`);
	playAgain();
}

function playAgain() {
	confirm(`¿Quieres volver a jugar?`) ? beginGame() : alert(thanksBye);
}

welcome();  // esta función ya ejecuta todo el bingo desde el principio, no hace falta ejecutar ninguna function más