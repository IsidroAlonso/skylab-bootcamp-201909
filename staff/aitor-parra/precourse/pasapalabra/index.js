//TEMA 4: FINAL CHALLENGE (JS)
//Pasapalabra Game! (Final JS) 🎮⁉️
//El codigo del 'Pasapalabra' se ejecuta con ---->       PasaPalabra()       <----

//array con preguntas objetos
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
]

//declaración variables que utiliza el código
var player = '';
var players = [];
var numPlayer = -1;
var aciertos1 = 0;
var aciertos2 = 0;
var fallos1 = 0;
var fallos2 = 0;
var pasapalabras = 0;
var respuesta = '';
var ronda = 0;
var playersRanking = [];


//función que nos lleva a un menu desde dónde empezar el juego, consultar el ranking o salir del código.
function menu(){

    var menuI = Number(prompt('JUEGO PASAPALABRA SKYLAB\n[1] Para empezar partida.\n[2] Ver Ranking.\n[3] Salir del juego.'));
    switch(menuI){ case 1: resetGame(); jugador(); break; case 2: ranking(); break;  case 3: resetGame(); exit(); break; default: menu(); break;}}

//función que pregunta y registra el usuario, explica el funcionamiento del juegoy informe de la opción 'SALIR' para abandonar la partida en cualquier momento.   
function jugador(){
    numPlayer++;
    player = prompt('Introduce nombre de usuario.');
    alert('Hola ' + player.toUpperCase() + ' .\nResponde la palabara correcta o "pasapalabra" para responder en una segunda ronda.\nTeclea "SALIR" si quieres salir del juego.\nEmpieza el juego!');

    play();
}    

//función que muestra las pregunta una tras otra y discrimina las respuestas acertadas, falladas o pasapalabra.
function play(){
    
    ronda++

    for (q = 0 ; q < questions.length ; q++){
        respuesta = prompt(questions[q].question, 'pasapalabra');
        if (respuesta === questions[q].answer) {
            questions[q].status = 1;
            aciertos1++;
        }  
        if (respuesta === 'salir' || respuesta === 'SALIR') {exit(); break;}
        if (respuesta === 'pasapalabra') {
            questions[q].status = 2;
            pasapalabras++
        } else if (respuesta !== questions[q].answer) {
            fallos1++;
        } 
    }


//variable y switch que muestran menú para jugar segunda ronda, volver al menu principal o salir del juego.    
var otraRonda = Number(prompt('[1] Si quieres jugar la segunda ronda.\n[2] Si quieres volver al menú de juego.\n[3] Salir del juego.'));

    switch(otraRonda){
        case 1: segundaRonda(); break; case 2: menu(); break; case 3: exit(); break; default: segundaRonda(); break;}
}

//función que muestrsa las preguntas que has sido pasadas(pasapalabras) en la primera ronda, y discrimina entre acierto o fallo.
function segundaRonda(){
    ronda++
    if (pasapalabras !== 0) {
        alert('Empieza la segunda ronda.')
        for (w = 0 ; w < questions.length ; w++){
            if (questions[w].status === 2){
            respuesta = prompt(questions[w].question, 'pasapalabra');
            
            if (respuesta === questions[w].answer) {
                aciertos2++
            } 

            if (respuesta === 'salir') {exit(); break;}

            if (respuesta !== questions[w].answer || respuesta === 'pasapalabra'){
                fallos2++
            }
            }  
        }
    }

//se ejecuta la función calculoRanking() que permite registrar los resultados y alimentar de datos para ofrecer un ranking en la funcion ranking().
    calculoRanking();
    menu();
}


//función que vuelve la variables que registran datos a su valor inicial para que el nuevo jugador tenga sus propios y únicos datos.
function resetGame(){
    aciertos1 = 0;
    aciertos2 = 0;
    fallos1 = 0;
    fallos2 = 0;
    pasapalabras = 0;
    respuesta = '';
    ronda = 0;
    for (e in questions) { questions[e].status = 0; };
}

//funcion que usa un object constructor para construïr un objeto con los datos de cada jugador, y los guarda en un array.
function calculoRanking() {
    var playerObj = new PlayerCreator(player, aciertos1, aciertos2, fallos1, fallos2, pasapalabras); 
    players.push(playerObj);  
}

//función que ordena y muestra el array dónde se guardan los datos de cada jugador, priorizando los aciertos en primera ronda.
function ranking(){
      
    players.sort(function(a, b) {return b.aciertos1-a.aciertos1})
    for (var e = 0; e < players.length ; e++) {
    console.log(players[e].name.toUpperCase() + '->\naciertos 1a ronda: ' + players[e].aciertos1 + '\nfallos 1a ronda: ' + players[e].fallos1 + '\npasapalabras 1a ronda: ' + players[e].pasapalabras + '\naciertos 2a ronda: ' + players[e].aciertos2 + '\nfallos o pasapalabras 2a ronda: ' + players[e].fallos2 + '\n')
    }
}


//función que crea un object constructor para poder registrar cada jugador y sus datos y usarlo pra mostrar un ranking.
function PlayerCreator(player, aciertos1, aciertos2, fallos1, fallos2, pasapalabras){
    this.name = player;
    this.aciertos1 = aciertos1;
    this.aciertos2 = aciertos2;
    this.fallos1= fallos1;
    this.fallos2 = fallos2;
    this.pasapalabras = pasapalabras;
  }
 
// función que permite salir del juego.  
function exit(){
    alert('Saliendo del juego.')
}    
 
//función principal que da inicio al juego.
function PasaPalabra(){
    players = [];
    menu();
}
    


