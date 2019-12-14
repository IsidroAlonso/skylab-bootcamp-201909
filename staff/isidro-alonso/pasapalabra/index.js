// pasapalabra
/*
Una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado.
Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda.
El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.
El programa no debería hacer distinciones entre mayúsculas, minúsculas... 
*/

const questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
]

const thanksBye = `¡Gracias por jugar! ¡Adiós!`;
let userName = "";
let correctAnswers = 0; // respuestas correctas (puntuación)
let incorrectAnswers = 0; // respuestas incorrectas
let answeredQuestions = 0; // número de respuestas respondidas, tanto correctas como incorrectas

function welcome() {
    userName = ""; // devuelve el nombre a su valor inicial
    userName = prompt(`¡Bienvenido a Pasapalabra!\nPor favor, introduce tu nombre antes de empezar`, `Jugador`);
    userName !== null && userName !== `` ? alert(`¡A jugar, ${userName}!`) + beginGame() : alert(`¡A jugar!`) + beginGame();
}

function beginGame() {
    correctAnswers = 0; // devuelve todos los valores a su valor inicial si se realiza una nueva partida
    incorrectAnswers = 0;
    answeredQuestions = 0;
    for (let i = 0; i < questions.length; i++) {
        questions[i].status = 0;
    }
    confirm(`¿Comenzar el juego?`) ? gameQuestion() : alert(thanksBye);
}

function gameQuestion() {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].status === 0) { // esto sirve para que solo te salgan las preguntas sin responder (las que has hecho pasapalabra), de modo que el status 1 pasa a ser el de las preguntas que se han respondido, sean correctas o no
            let answer = prompt(questions[i].question, `pasapalabra`);
            if (answer.toLowerCase() === `pasapalabra`) {
                alert(`Pasamos a la siguiente pregunta`);
                console.log(`Respuestas correctas: ` + correctAnswers);
            }
            else if (answer.toLowerCase() === `end`) { // si escribes end, te muestra el número de respuestas acertadas y falladas, pero no te guarda el nombre en el ranking
                return resultsEnd();
            }
            else if (answer.toLowerCase() === questions[i].answer) { // toLowerCase sirve para que no te cuente las mayúsculas como error cuando rellenas la respuesta
                alert(`¡CORRECTO!`);
                if (questions[i].status === 0) {
                    questions[i].status = 1; // marcamos la pregunta como respondida para que, cuando se haga el bucle, se salte la pregunta y no se repita
                }
                answeredQuestions++;
                correctAnswers++;
                console.log(`Respuestas correctas: ` + correctAnswers);
            }
            else if (answer.toLowerCase() !== questions[i].answer) {
                alert(`¡Noooo! ¡Has Fallado!`);
                if (questions[i].status === 0) {
                    questions[i].status = 1; // marcamos la pregunta como respondida para que, cuando se haga el bucle, se salte la pregunta y no se repita
                }
                answeredQuestions++;
                incorrectAnswers++;
                console.log(`Respuestas correctas: ` + correctAnswers);
            }
        }
    }
    if (answeredQuestions === questions.length) { // cuando el número de preguntas respondidas sea el mismo que el número de preguntas que hay, se acaba el juego y te muestra los resultados
        return results();
    } else { // si no es así, volverá al bucle, donde solo saldrán las preguntas a las que se les ha hecho pasapalabra
        gameQuestion();
    }
}

function results() {
    if (userName !== null && userName !== ``) {
        alert(`Fin de la partida, ${userName}\nNúmero de aciertos: ${correctAnswers}\nNúmero de fallos: ${incorrectAnswers}`);
        return ranking();
    } // si no rellenaste el nombre del jugador (en blanco), te mostrará el número de aciertos y fallos, pero no te guarda el resultado en el ranking
    alert(`Fin de la partida\nNúmero de aciertos: ${correctAnswers}\nNúmero de fallos: ${incorrectAnswers}`);
    playAgain();
}

function resultsEnd() {
    alert(`Fin de la partida\nNúmero de aciertos: ${correctAnswers}\nNúmero de fallos: ${incorrectAnswers}`);
    playAgain();
}

let playerRank = []; // array con la lista de jugadores más sus aciertos

function addPlayer(name, score) { // te añade el nombre del jugador y su puntuación a la array playerRank
    let player = { // enlaza el nombre del jugador con su puntuación
        jugador: name, aciertos: score
    }
    playerRank.push(player);
};

function ranking() { // tabla con la lista de los mejores jugadores ordenados por su puntuación
    addPlayer(userName, correctAnswers);
    playerRank.sort((a, b) => b.aciertos - a.aciertos);
    console.log(`Mejores Jugadores:\n`);
    console.table(playerRank);
    playAgain();
}

function playAgain() {
    confirm(`¿Quieres volver a jugar?`) ? welcome() : alert(thanksBye);
}

welcome();