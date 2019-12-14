// Declaraciones variables globales y funciones
let user = "";
let preguntas;
let randomNumber;
let indicePreguntas = 0;
let totalLetras = 26;
let vuelta = 0;
let totalPoints = 0;
let totalFails = 0;
let noFin = true;

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

var questions1 = [
   { letter: "a", answer: "avion", status: 0, question: "CON LA A. Método de transporte aereo"},
   { letter: "b", answer: "barcelona", status: 0, question: "CON LA B. Lugar donde se encuentra la sagrada Familia"},
   { letter: "c", answer: "carbon", status: 0, question: "CON LA C. Mineral para brasear carnaca"},
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

var questions2 = [
   { letter: "a", answer: "abeja", status: 0, question: "CON LA A. Insecto famoso por su miel"},
   { letter: "b", answer: "barquero", status: 0, question: "CON LA B. Persona que pasea una barca"},
   { letter: "c", answer: "casa", status: 0, question: "CON LA C. House en castellano"},  
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

var userRanking = [
    { name:"Carlton", points:2 },
    { name:"FreshPrince", points:4 },
    { name:"TioPhil", points:6 }
  ];

function pedirUser() {
   let noFinUser = true;
   do {
      user = prompt('INTRODUZCA EL USUARIO');
      if (user != "" && user != null) {
         noFinUser = false;      
      }
    } while (noFinUser);        
};

function mostrarRanking() {
   let i, j;
   let stringRanking = "";
   userRanking.sort(function(a, b){return b.points - a.points});
   for (i = 0; i < userRanking.length; i++) {
       j = i + 1;
       if (userRanking.length > 9) {
           i = 99999;
       }
       stringRanking += j + "- " + userRanking[i].name + 
                        " Puntos: " + userRanking[i].points + " <br>";  
    }
    document.getElementById("rank").innerHTML = "<b>RANKING: </b> " + "<br>" + stringRanking;
};

function addRanking(user, points) {
    let ranking;
    ranking = { name: user,
        points: points
      };
      userRanking.push(ranking);
};
 
function inicializaStatus() {
    let i;
    for (i = 0; i < preguntas.length; i++) {
       preguntas[i].status = 0;
     }
};
 
function numRandom(num) {
    let numRan = 0;
    numRan = Math.floor(Math.random() * num);
    if (numRan === 0) {
       numRan = numRandom(num);
    }
    return numRan;
};
 
function asignarPreguntas() {
     randomNumber = numRandom(4);
     switch (randomNumber) {
       case 1: 
             preguntas = questions;
             break;
       case 2:
             preguntas = questions1;
             break;
       case 3:
             preguntas = questions2;
             break;  
     }
};

function mostrarPrimeraPregunta() {    
     indicePreguntas = 0;
     totalLetras = 26;
     vuelta = 0;
     document.getElementById("preguntas").innerHTML = preguntas[indicePreguntas].question;
};

function MostrarPregunta() {    
    document.getElementById("preguntas").innerHTML = preguntas[indicePreguntas].question;
};

function submit() {   
    let respuesta = document.getElementById("frm1").value;
    let i;

    respuesta = respuesta.toLocaleLowerCase();

    if (respuesta != preguntas[indicePreguntas].answer) {
        totalFails += 1;
        preguntas[indicePreguntas].status = 99;
        document.getElementById(indicePreguntas).style.background = "rgb(173, 14, 9)";
     } else {
        totalPoints += 1;
        preguntas[indicePreguntas].status = 98;
        document.getElementById(indicePreguntas).style.background = "rgb(127, 204, 56)";            
     };

     document.getElementById("frm1").value = "";

     if (indicePreguntas === totalLetras) {
        indicePreguntas = 0; 
        vuelta += 1;
        for (i = 0; i < preguntas.length ;i++) {
            if (preguntas[i].status === vuelta) {
                totalLetras = i;
            };
          };
     };

     for (i = indicePreguntas; i < preguntas.length ;i++) {
        if (preguntas[i].status === vuelta) {
            indicePreguntas = i;
            i = 9999;
        };
      };

    for (i = 0; i < preguntas.length ;i++) {
        if (preguntas[i].status === vuelta) {
            noFin = true;
            i = 9999;
        } else {
            noFin = false;
        };
    };

    if (!noFin) {
        alert("Jugo finalizado")
        addRanking(user, totalPoints) 
        mostrarRanking();
        return;
    };      
     document.getElementById("preguntas").innerHTML = preguntas[indicePreguntas].question;

};

function pasa() {  
   
    if (indicePreguntas === totalLetras) {
        preguntas[indicePreguntas].status = vuelta + 1;
        indicePreguntas = 0;
        totalLetras = 0;
        vuelta += 1;
        for (i = 0; i < preguntas.length ;i++) {
            if (preguntas[i].status === vuelta) {
                totalLetras = i;
            };
        };
        for (i = indicePreguntas; i < preguntas.length ;i++) {
            if (preguntas[i].status === vuelta) {
                indicePreguntas = i;
                document.getElementById("preguntas").innerHTML = preguntas[indicePreguntas].question; 
                i = 9999;
            };
        };  
    } else {
       preguntas[indicePreguntas].status = vuelta + 1;
       for (i = indicePreguntas; i < preguntas.length ;i++) {
           if (preguntas[i].status === vuelta) {
               indicePreguntas = i;
               document.getElementById("preguntas").innerHTML = preguntas[indicePreguntas].question; 
               i = 9999;
            };
        };  
    };
};

function addRanking(user, points) {
    let ranking;
    ranking = { name: user,
        points: points
      };
      userRanking.push(ranking);
 };

// Empezamos proceso

function pasalacabra() {
    let totalPoints = 0;
    let noFin = true;    
    pedirUser();
    mostrarRanking();
    asignarPreguntas();
    inicializaStatus();
    mostrarPrimeraPregunta();
};

 pasalacabra();
