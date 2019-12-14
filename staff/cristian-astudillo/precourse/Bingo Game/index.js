/* PROYECTO TEMA 3: BINGO GAME! 🎲🎰

Realiza un programa que simule un Bingo.
Cuando se ejecute, pedirá el nombre del jugador y deberá guardarse. 
Durante el primer turno se mostrará un cartón con 15 números (excluyendo el 0 siempre), 
para pasar al siguiente turno el usuario deberá confirmar mediante confirm() visualizándose otro número, 
si coincide con alguno de los existentes en el cartón, cambiará por una "X" o un 0. 
El cartón se mostrará, al final de cada turno, con los cambios efectuados, indicando al usuario qué número se ha encontrado. 
El programa deberá preguntar al usuario al inicio de cada turno si desea continuar, en caso de que se continúe, 
seguirá el mismo patrón que hasta el momento.
Por supuesto, cuando todos los números de una misma línea sean "X", mostrará un mensaje "LÍNEA!", pero la ejecución seguirá, 
el juego solo acabará cuando todos los números estén a "X".
Cuando el juego concluya, deberá decirle al usuario en cuantos turnos se ha completado el cartón. Por último, deberá preguntar si desea volver a jugar.
Comenzar por una versión muy pequeña y básica nos hará tener un programa de principio a fin, es decir, que empieza, 
que acaba y haga lo que queramos a muy pequeña escala, 
una vez lo tengamos todo bien dividido podremos empezar a extenderlo tanto como queramos.
Si funciona con 5 números deberá funcionar con 15, no? 😁

Requisitos de la versión mínima:
- Cartón con solo 5 números, sin necesidad de ser generados random. Solo necesitamos un número random cuando recorramos el cartón y veamos si hay alguna coincidencia. 
No necesitamos asegurarnos que el número random de cada turno no haya salido en turnos anteriores, recuerda que estamos en la mínima versión posible, 
eso ya lo solucionaremos. 
- Si hay coincidencia, vamos a reemplazar el número por una 'X' y mostramos el cartón modificado
Separarlo todo en funciones, englobado en una función global llamada bingo(), tal que:

function() => Generar Numero Random Bombo
function() => Nuevo turno (Match carton[i] === randomNum)
function() => Preguntar Nuevo Turno

PRO
●	Cuando se muestre la carta, se preguntará al usuario si realmente quiere ese cartón o generar otro, si realmente quiere ese cartón, 
    deberá responder "Yes" para proceder.
●	Establece un sistema de puntos, en cuantos más turnos se complete el cartón, menos puntos (el sistema de puntos intégralo como quieras),
    por el contrario, a menos turnos, más puntos.
●	Antes de empezar el juego, muestra el sistema de puntos al usuario.
●	Ranking de usuarios (ordenado por puntos).

var bingoCard = [
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    //next line
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false },
    { number: randomNumber, matched: false }
];

 */

//CREAR CARTÓN BINGO
//NÚMEROS ALEATORIOS PARA CREAR CARTÓN.
function randoms() {
    var number1 = Math.ceil(Math.random() * 40);
    var number2 = Math.ceil(Math.random() * 40);
    var number3 = Math.ceil(Math.random() * 40);

    { return number1, number2, number3 };
};

//FACTORY FUNCTIONS PARA CREAR CARTÓN.
function numerosCarton() {
    return {
        numero1: randoms(), match1: 0,
        numero2: randoms(), match2: 0,
        numero3: randoms(), match3: 0
    };
}

//CARTON CREADO.
var numero = 5;
var cartonBingo = [];
for (let i = 1; i <= numero; i++) {
    var carton = { ...numerosCarton() };
    cartonBingo.push(carton);
}

//CARTÓN BINGO DEFINITIVO.
let cartonBingo2 = []
var linea1 = cartonBingo.map(item => item.numero1);
var linea2 = cartonBingo.map(item => item.numero2);
var linea3 = cartonBingo.map(item => item.numero3);
cartonBingo2.push(linea1, linea2, linea3);


//NUMEROS BOMBO SIN REPETICIONES.
let tombola = [];
for (let randomNumber = 1; randomNumber < 60; randomNumber++) {
    let random = Math.ceil(Math.random() * 60);
    if (tombola.indexOf(random) == -1) {
        tombola.push(random);
    } else {
        randomNumber--;
    };
};

//console.log(tombola);

//CONTADOR VUELTAS Y SI HAY COINCIDENCIA DE LÍNEA. 
let vueltas = 0;
let lineaMatched = false;

//INICIO BINGO.
function bingo() {
    alert("Hola participante!! Bienvenido al Bingo Skylab Coders Game, donde tus sueños se pueden hacer realidad!!..." +
        "Para poder participar en este concurso, necesitamos algunos datos... ");
    var nombre = prompt("Nos podrías decir tu nombre ?(Si no contestas o cancelas, el juego se termina de manera abrupta).").toUpperCase();
    if (nombre === "" || nombre === null) {
        return alert("Adiós!!");
    }

    alert(`Bienvenido ${nombre}.`);
    alert("Las reglas del juego son las siguientes : la pantalla mostrará un cartón de 15 números con 3 líneas de 5 números cada uno, " +
        " y luego, el número correspondiente del bombo; si coincide con algún número del cartón, se tachará con una 'X', y si tacha alguna línea " +
        "se cantará 'LÍNEA!!', y si se completa el cartón ... BINGO!!!.");

    alert("A continuación, daremos comienzo al Bingo Skylab Coders Game....");
    alert("... Y empezamos!!!");
    alert("A continuación, hacemos entrega de su cartón para poder participar:");
    alert("CARTÓN BINGO = " + JSON.stringify(cartonBingo2));
    alert("Ahora daremos comienzo al Bingo Skylab Coders!!...");

    //SI HAY COINCIDENCIA ENTRE EL NÚMERO BOMBO Y NÚMERO CARTÓN.
    function inicio() {
        alert("... Y vamos girando el bombo, el número que sale ahora es el...");
        alert(`Número ${JSON.stringify(tombola[0])}!!`);
        for (let r = 0; r < cartonBingo2.length; r++) {
            for (let c = 0; c < cartonBingo2[r].length; c++) {
                if (cartonBingo2[r][c] === tombola[0]) {
                    alert("COINCIDE!!!!");
                    cartonBingo2[r][c] = "X"
                    alert("CARTÓN BINGO = " + JSON.stringify(cartonBingo2));
                };
            };
        };

        //SE ELIMINA CADA VEZ QUE SALE UN NÚMERO DEL BOMBO PARA QUE SALGA EL SIGUENTE.
        tombola.splice(0, 1);

        //CONTADOR VUELTA.
        vueltas++;

        //ARRAY DE LÍNEAS PARA LUEGO COMPROBAR SI SE TACHA LÍNEA.
        let totalLineas = [];

        var linea1 = cartonBingo2[0].every(nro => typeof nro === "string");
        var linea2 = cartonBingo2[1].every(nro => typeof nro === "string");
        var linea3 = cartonBingo2[2].every(nro => typeof nro === "string");

        totalLineas.push(linea1, linea2, linea3);

        //SI HAY LÍNEA COMPLETA Y CANTAR UNA SOLA VEZ.       
        for (let i = 0; i < totalLineas.length; i++) {
            if (totalLineas[i] === true && lineaMatched === false) {
                alert("LÍNEA!!!!!");
                totalLineas.splice(i, 1);
                lineaMatched = true;
                i--
            }
        }

        //CARTÓN BINGO COMPLETADO
        if (linea1 && linea2 && linea3) {
            alert("HAS COMPLETADO LAS 3 LINEAS!!!!")
            alert("BINGO!!!!!");
            alert("FELICIDADES!!! HA GANADO EL PREMIO MAYOR!!!");
            return alert(" Muchas Gracias por participar en el Bingo Skylab Coders Game,"
                + " donde sus sueños se pueden hacer realidad!!...");
        };

        inicio();

    };

    inicio();

    //RANKING NOMBRE Y VUELTAS.
    const listadoRanking = (name, matches) => {
        return {
            name: nombre,
            matches: vueltas
        };
    };

    const rankingFinal = listadoRanking(vueltas, nombre);
    alert("Ranking Bingo Skylab Coders Game:")
    alert(JSON.stringify(`Participante : ${rankingFinal.name} , Total Vueltas : ${rankingFinal.matches}`));
    return alert("gracias por jugar al Bingo Skylab Coders Game!!... que tenga un buen día..");

};

bingo();

