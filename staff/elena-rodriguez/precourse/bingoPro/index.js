
// Decimos hola y preguntamos por nombre de usuario

function hola() {
    let name = prompt('Bienvenido/a! Cuál es tu nombre?'); 
    if (name === '') {name = 'Usuario'};
    alert('Hola, ' + name +'!');
    return name;
}



// Enseñamos el sistema de puntos

function printSistemaPuntos(name) {
console.log(name + ', éste es el sistema de puntos de BINGO GAME:');
console.log('Más de 100 turnos : 5 puntos.')
console.log('Entre 96 y 100 turnos : 10 puntos.')
console.log('Entre 91 y 95 turnos : 15 puntos.')
console.log('Entre 86 y 90 turnos: 20 puntos.')
console.log('Entre 81 y 85 turnos: 30 puntos.')
console.log('Entre 86 y 80 turnos: 40 puntos.')
console.log('Entre 71 y 85 turnos: 50 puntos.')
console.log('Entre 61 y 70 turnos: 60 puntos.')
console.log('Entre 51 y 60 turnos: 70 puntos.')
console.log('Entre 41 y 50 turnos: 85 puntos.')
console.log('40 turnos o menos: 100 puntos.')
console.log('-----------------------------------------')
}


//creamos el cartón

function generarCarton(lengthOfArray) {
    let cartonBingo = []
    while(cartonBingo.length < lengthOfArray) { 
        var r = Math.floor((Math.random() * 89) + 1);
        if((cartonBingo.indexOf(r) === -1)){
        cartonBingo.push(r);
        }
    }
return cartonBingo;
}

// separamos el cartón en 3 líneas 

function createLines(cartonBingo) {
let line1 = cartonBingo.slice(0,5);
let line2 = cartonBingo.slice(5,10);
let line3 = cartonBingo.slice(10,15);
cartonBingo = [line1,line2,line3];
return cartonBingo;
}

// Para imprimir bonito el Cartón

function printNice(cartonBingo) {
    console.log('-----------------------------------------')
    console.log('Estos son tus números:')
    console.log(cartonBingo[0]);
    console.log(cartonBingo[1]);
    console.log(cartonBingo[2]);
    console.log('-----------------------------------------')

}

// Preguntar si se quiere cambiar el cartón

function confirmCarton() {
    
    var wantCarton = prompt('Quieres este cartón?: (Yes) para confirmar el cartón / (No) para generar uno nuevo');
    if (wantCarton === 'Yes') {return true}
    else if(wantCarton === 'No') {return false};

}

// Comprobar si el cartón está completo (BINGO)

function isFinished(cartonBingo) {
    for (let i= 0; i < cartonBingo.length; i++) 
        for (let j = 0; j< cartonBingo[i].length; j++)
    {if (typeof (cartonBingo[i][j]) === 'number') {return false}
    } return true;
}

// Preguntar por siguiente turno

function wannaPlay() {
    var opcion = confirm("Next turn?");
    if (opcion == true) {
        return true
    }
    else {
        return false;
    }
}

//Sacamos número del bombo

function generarRandom () {
    let randomNumber = Math.floor((Math.random() * 89) + 1)
    return randomNumber;
}

// Comprobamos si el número está en el Cartón

function isMatching(cartonBingo, randomNumber) {
    for (let i = 0; i < cartonBingo.length; i++) {
        let isaMatch = cartonBingo[i].includes(randomNumber);
        if (isaMatch) {return i}
    } return -1;
}

// Si el número está en el cartón, avisamos y ponemos una X

function numFounded(cartonBingo, i, randomNumber) {
    console.log('Number founded!!');
    let indice = cartonBingo[i].indexOf(randomNumber);
    cartonBingo[i][indice] = 'X';
    return cartonBingo;}

// Comprobamos si hay línea completa

function findLinea(cartonBingo,i) {
for (let j= 0; j < cartonBingo[i].length; j++) 
    {if (typeof (cartonBingo[i][j]) === 'number') {return false}
        } return true;
}
  
// Adjudicamos puntos dependiendo de los turnos realizados

function findMyPoints(counter) {
    let points = '';
    if (counter > 100) {points = 5}
    else if ((counter >= 96) && (counter <= 100)) {points = 10}
    else if ((counter >= 91) &&  (counter <= 95)) {points = 15}
    else if ((counter >= 86) &&  (counter <= 90)) {points = 20}
    else if ((counter >= 81) &&  (counter <= 85)) {points = 30}
    else if ((counter >= 76) &&  (counter <= 80)) {points = 40}
    else if ((counter >= 71) && (counter <= 75)) {points = 50}
    else if ((counter >= 61) && (counter <= 70)) {points = 60}
    else if ((counter >= 51) && (counter <= 60)) {points = 70}
    else if ((counter >= 41) && (counter <= 50)) {points = 85}
    else if (counter <= 40) {points = 100}
    console.log(`Your game is ended in ${counter} turns! You have ${points} points.`);
    console.log('-----------------------------------------')
    return points
    } 

// preguntamos si se quiere jugar de nuevo

function playAgain() {
    var again = confirm('Wanna play again?')
    if (again == true) {return true}
    else {
    return false;
    }
}

// almacenamos los puntos y el nombre del usuario

function savePoints (name, points, allUsersPoints) {
var newUserPoints = {};
newUserPoints.name = name;
newUserPoints.points = points;
allUsersPoints.push(newUserPoints);
return allUsersPoints;
}

// ordenamos los usuarios de más a menos puntos y lo mostramos

function giveMeRanking (allUsersPoints) {
    for (let i = 0; i < (allUsersPoints.length -1); i++) {
        for (let j = i+1; j < allUsersPoints.length; j++) {
        if (allUsersPoints[i].points < allUsersPoints[j].points) {
            var changeOrder = allUsersPoints[i];
            allUsersPoints[i] = allUsersPoints[j];
            allUsersPoints[j] = changeOrder;
         }
        }
    }
console.log('Este es el ranking de puntos y jugadores: ')
for (let r = 0; r < allUsersPoints.length; r++) {console.log(allUsersPoints[r])}
return allUsersPoints;
}



// Antes de empezar a jugar....

function inicio(){
    let name = hola();
    console.log('-----------------------------------------')
    printSistemaPuntos(name);
    do {
    cartonBingo = generarCarton(15)
    cartonBingo = createLines(cartonBingo)
    printNice(cartonBingo)
    }
    while (confirmCarton(wannaPlay) == false);
    return name;
}


// Juego principal 

function game() {
let numbersAccumulated = [];
let counter = 0;

do {
    if (wannaPlay() == true) {
        counter = counter + 1
    } 
    else {
        console.log('Bye!');
        return;
    }

do {randomNumber = generarRandom()}
while (numbersAccumulated.indexOf(randomNumber) > -1);
console.log('El ' + randomNumber + '!');
numbersAccumulated.push(randomNumber);
let i = isMatching(cartonBingo, randomNumber)  
if (i > -1) {
    cartonBingo = numFounded(cartonBingo, i, randomNumber)
    printNice(cartonBingo);
    if (findLinea(cartonBingo, i) == true) {alert('LINEA!'); console.log('LÍNEA!')};
}
else  {
        console.log('Number not founded!');
        printNice(cartonBingo);
    }
}   
while (isFinished(cartonBingo) == false);
console.log('BINGO!!!')
alert('BINGO!!!');
return counter;}


// función completa
        
function bingo() {
var allUsersPoints = []
do {
    name = inicio();
    let counter = game(name);
    let points = findMyPoints(counter);
    allUsersPoints = savePoints(name,points,allUsersPoints);
    giveMeRanking(allUsersPoints)
    } 
while (playAgain() == true);
console.log('Maybe next time!');
return;
}

bingo();

