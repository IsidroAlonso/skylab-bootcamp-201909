var bingoCard = [
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },

    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },

    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false },
    { number: 0, matched: false }
];

var jugadores = [];
var username = '';
var puntuacion = 150;
var turno = 0;
var bola = [];
var cartones = [];
var cantaLinea = false;

bingo();

function bingo() {
    let bucle = true;
    do {
        reiniciar();
        muestraInfoPuntuacion();
        preguntaNombre();
        montarCarton();
        do {
            bucleError = false;
            let option = prompt('¿Desea volver a jugar?(S/N)')
            switch (option.toUpperCase()) {
                case 'S':
                    bucle = true;
                    break;
                case 'N':
                    bucle = false;
                    salir();
                    break;
                default:
                    alert('Opción incorrecta!');
                    bucleError = true;
            }
        } while (bucleError);

    } while (bucle);
}

function reiniciar() {
    bola = [];
    cartones = [];
    turno = 0;
    cantarLinea = false;
    username = '';
    puntuacion = 150;
    let numero = null;
    for (let i = 0; i < bingoCard.length; i++) {
        numero = bingoCard[i];
        numero['number'] = 0;
        numero['matched'] = false;
    }
}

function muestraInfoPuntuacion() {
    alert('El sistema de puntos se inicia con 150 puntos y cada vez que se inicie un turno '
        + 'se descuentan 5 puntos. El ranking mostrará la mejor puntuación de cada usuario.');
}

function preguntaNombre() {
    username = prompt('Por favor, introduzca su nombre');
    alert('Hola, ' + username);
    if (getUser(username) === null) {
        jugadores.push({
            nombreUsuario: username,
            puntuacion: 0
        });
    }
}

function montarCarton() {
    cantarLinea = false;
    let bucleMain = false;
    do {
        bucleMain = false;
        let numeroCarton = null;
        for (let i = 0; i < bingoCard.length; i++) {
            do {
                numeroCarton = bingoCard[i]['number'] = Math.floor(Math.random() * 30) + 1;
            } while (cartones.indexOf(numeroCarton) !== -1);
            cartones.push(numeroCarton);
        }
        ordenarCarton();
        mostrarCarton();
        let option = '';
        let bucleError = false;
        do {
            bucleError = false;
            let option = prompt('¿Desea jugar con este cartón? (S/N)');
            switch (option.toUpperCase()) {
                case 'S':
                    siguienteTurno();
                    break;
                case 'N':
                    bucleMain = true;
                    cartones = [];
                    break;
                default:
                    alert('Opción incorrecta!');
                    bucleError = true;
            }
        } while (bucleError);
    } while (bucleMain);
}

function ordenarCarton() {
    bingoCard.sort(function (a, b) {
        return (a.number - b.number)
    });
}

function mostrarCarton() {
    let carton = '';
    let numero = null;
    for (let i = 0; i < bingoCard.length; i++) {
        numero = bingoCard[i];
        if (numero['matched']) {
            if (i < bingoCard.length - 1) {
                carton += ' X, ';
            } else {
                carton += ' X ';
            }
        } else {
            if (i < bingoCard.length - 1) {
                carton += numero['number'] + ', ';
            } else {
                carton += numero['number'] + ' ';
            }
        }
    }
    console.log('Este es su cartón: ' + carton);
    alert('Este es su cartón: ' + carton);
}

function siguienteTurno() {
    turno++;
    confirm('¿Desea iniciar un nuevo turno?') ? sacarBola() : salir();
}

function salir() {
    alert('ciao bell@!');
}

function sacarBola() {
    let numeroRandom = 0;
    do {
        numeroRandom = Math.floor(Math.random() * 30) + 1;
    } while (bola.indexOf(numeroRandom) !== -1);
    bola.push(numeroRandom);
    console.log('El número que ha salido del bombo es: ' + numeroRandom);
    alert('El número que ha salido del bombo es: ' + numeroRandom);
    comprobarBola(numeroRandom);
}

function comprobarBola(numeroRandom) {
    let numero = null;
    for (let i = 0; i < bingoCard.length; i++) {
        numero = bingoCard[i];
        if (numero['number'] == numeroRandom) {
            numero['matched'] = true;
            console.log('Enhorabuena!!! El número: ' + numero['number'] + ' está en su cartón');
            alert('Enhorabuena!!! El número: ' + numero['number'] + ' está en su cartón');
        }
    }
    if (cantarLinea === false) {
        if (comprobarlinea()) {
            console.log('LINEA!!! Continuamos para BINGO.');
            alert('LINEA!!! Continuamos para BINGO.');
        }
    }
    if (comprobarBingo()) {
        puntuacion = (30 - turno) * 5;
        alert('¡¡¡BINGO!!!');
        alert('Ha completado el cartón en ' + turno + ' turnos.');
        alert('La puntuación obtenida es de ' + puntuacion + ' puntos.');
        addPuntuacion(username, puntuacion);
        muestraRanking();
    } else {
        mostrarCarton();
        siguienteTurno();
    }
}

function comprobarlinea() {
    let linea = null;
    let contarX = 0;
    let contadorNumeros = 0;
    for (let i = 0; i < bingoCard.length / 5; i++) {
        contarX = 0;
        for (let j = 0; j < bingoCard.length / 3; j++) {
            if (contadorNumeros < bingoCard.length) {
                linea = bingoCard[contadorNumeros];
                if (linea['matched']) {
                    contarX++;
                }
                if (contarX == 5) {
                    cantarLinea = true;
                }
                contadorNumeros++;
            }
        }
    }
    return cantarLinea;
}

function comprobarBingo() {
    let contadorX = 0;
    let numero = null;
    let retorno = false;
    for (let i = 0; i < bingoCard.length; i++) {
        numero = bingoCard[i];
        if (numero['matched']) {
            contadorX++;
        }
    }
    if (contadorX == bingoCard.length) {
        retorno = true;
    }
    return retorno;
}

function addPuntuacion(nombreUsuario, puntuacion) {
    let usuario = getUser(nombreUsuario);
    if (usuario['puntuacion'] < puntuacion) {
        usuario['puntuacion'] = puntuacion;
    }
}

function getUser(nombreUsuario) {
    let jugadorRetorno = null;
    for (let i = 0; i < jugadores.length; i++) {
        jugador = jugadores[i];
        if (jugador['nombreUsuario'] === nombreUsuario) {
            jugadorRetorno = jugador;
        }
    }
    return jugadorRetorno;
}

function muestraRanking() {
    let jugador = null;
    for (let i = 0; i < jugadores.length; i++) {
        jugador = jugadores[i];
        console.log('El jugador: ' + jugador['nombreUsuario'] + ' , ha obtenido su mejor puntuación en: ' + jugador['puntuacion']);
    }
}