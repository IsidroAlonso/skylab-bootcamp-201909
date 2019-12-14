 // SKYLAB PASAPALABRA GAME!!! 

 // ---------------

var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
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
];

function questions() {
    var initialQuestions = questions[i].question;

    

};

// ---------------

function pasapalabra() {

    let userName; // User that plays the game
    var userProfile = [];
    var pendingLetters = []; // User pasapalabras counter
    var allLetters = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // To switch status from 0 to 1/2/3


 // ---------------
function welcome() {
    let userName = prompt("Hi, welcome to Skylab Pasapalabra! What's your name?");

    userName
        ? alert(`Hello, ${userName}! Let's start playing!`)
        : alert("Hello! Let's start playing!");

    game();

};

welcome();

// ---------------

function statusAnswer(questions) { // Giving values to each status -> 1:ok, 2:wrong, 3:not answered
    var correct = 0;
    var wrong = 0;
    var notAnswered = 0;

    for (let i = 0; i < questions.length; i++) {
        if (questions[i] === 1) {
            correct += 1;
        } else if (questions[i] === 2) {
            wrong += 1;
        } else if (questions[i] === 3) {
            notAnswered += 1;
        }
    }

}

// ---------------

function game() {

    var initalQuestions;
    var correctAnswers = 0;
    var pasapalabras = 0;
    var wrongAnswers = 0;
    var turns = 27;

    while (turns >= 1) {

        for (var i = 0; i < questions.length; i++) {

            if (questions[i].status === 0 || questions[i].status === 3) {
                var userAnswer = prompt(questions[i].question);

                if (userAnswer === questions[i].answer) {
                    correctAnswers += 1;
                    turns -= 1;

                    questions[i].status = 1;
                    allLetters.push(1);

                    console.log("CORRECT!!");

                } else if (userAnswer === "pasapalabra") {

                    questions[i].status = 3;
                    allLetters.push(3);
                    pendingLetters.push(questions[i].letter); // to know which letter is missing
                    pasapalabras += 1;

                    console.log("PASAPALABRA, we will try again later!");

                } else if (userAnswer !== "pasapalabra" || userAnswer !== questions[i].answer) {
                    wrongAnswers += 1;
                    turns -= 1;

                    questions[i].status = 2;
                    allLetters.push(2);

                    console.log("WRONG answer sorry..");

                };
            }

        }

    }

    userProfile.push(
        {correct: correctAnswers, wrong: wrongAnswers, noAnswer: pasapalabras}
    );
    statusAnswer(allLetters);

    // ---------------

    function userScore() {

        finalScore = userProfile;

        for (i = 0; i < finalScore.length; i++) {
            userFinalScore = ["Your final results: " + finalScore[i].correct + " correct answers / " +
                    finalScore[i].wrong + " errors / " + finalScore[i].noAnswer + " pasapalabras"]
            console.log(userFinalScore);
        }

        // ---------------

    };
    function playAgain() { // function to ask the user to play again and the final score
        newGame = confirm("Do you want to play again?");
        if (newGame === true) {
            welcome();
        } else {
            userScore();
        };
    };

    // ---------------

    playAgain();

};

};

pasapalabra();