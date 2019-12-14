/* PROYECTO TEMA 4:Pasapalabra Game! (Final JS) 🎮⁉️

Resource: https://www.youtube.com/watch?v=xJp2c_rcHDc

Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando, por ejemplo:
'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!

VERSIÓN MÍNIMA
Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras
ha fallado y cuántas ha acertado. Si el usuario responde con "PASAPALABRA" el juego deberá estar preparado para entender que en ese momento,
el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. 
El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.

PRO
●	El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" == "ANIMAL" // "Animal" // "aNiMal"...
●	El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, 
    el programa dirá cuántas letras ha acertado pero no entrará en el ranking.
●	Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían hacer tres preguntas diferentes.

*/

var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
]



//VACIAR CONTADOR SI SE DESEA VOLVER A JUGAR.
function vaciar() {
    aciertos = 0,
        fallos = 0;
};

//CONTADORES ACIERTOS Y FALLOS.
let aciertos = 0;
let fallos = 0;

function juego() {
    //INSERTAR NOMBRE JUGADOR
    alert("Bienvenidos a Pasapalabra!!");
    var nombre = prompt("Por favor, dinos tu nombre para poder participar.").toUpperCase();
    if (nombre === '') {
        return alert('Adiós!!');
    };

    alert(" Bienvenido " + nombre);
    alert("Las reglas del juego son las siguientes : la pantalla lanzará la definición de una "
        + "palabra y deberás adivinar qué palabra estamos tratando; si aciertas, es 1 punto; si fallas, es respuesta errónea, "
        + "y si no sabes de momento, di 'pasapalabra' y se acumulará a la siguiente ronda hasta que contestes todas las definiciones.");
    alert("De lo contrario, si no contestas o cancelas, el juego se termina de manera abrupta.");
    alert('A continuacíon, daremos comienzo al Pasapalabra....')
    alert('... Y empezamos!!!');

    //COMIENZA EL JUEGO
    for (const preguntas of questions) {
        alert(preguntas.question)
        let palabra = prompt('diga la palabra correspondiente... Si no lo sabe, diga "pasapalabra":').toLowerCase();

        if (palabra === "" || palabra === null) {
            alert('juego terminado... Gracias por jugar.');
            return
        };
        if (palabra === preguntas.answer) {
            alert('Acierto!!! Tienes 1 punto!!');
            preguntas.status = "OK"
            aciertos++
        } else if (palabra === 'pasapalabra') {
            alert('PASAPALABRA... acumula para la siguiente ronda.');
            preguntas.status = "P";

        } else {
            (preguntas.answer === false)
            alert('Fallo...tienes 1 fallo.');
            preguntas.status = "F";
            fallos++
        };
    };


    // SI QUEDAN DEFINICIONES POR RESPONDER.
    alert('A continuación, pasamos a la siguiente ronda de pasapalabras pendientes.')
    let responder = questions.filter(item => item.status === "P");
    if (responder) {
        while (responder) {
            for (const palabras2 of responder) {
                alert(palabras2.question)
                let palabra = prompt('diga la palabra correspondiente... Si no lo sabe, diga "pasapalabra":').toLowerCase();
                if (palabras2.answer === palabra) {
                    alert('Acierto!!! Tienes 1 punto!!');
                    palabras2.status = "OK"
                    aciertos++
                } else if (palabra === 'pasapalabra') {
                    alert('PASAPALABRA... acumula para la siguiente ronda.');
                    palabras2.status = "P";
                } else {
                    (palabras2.answer === false)
                    alert('Fallo...tienes 1 fallo.');
                    palabras2.status = "F";
                    fallos++
                };
            };
            responder--
        };
    };


    alert('Juego Terminado');

    //PASAPALABRA COMPLETADO.
    if (aciertos === 27) {
        alert(JSON.stringify('27 aciertos !! Felicidades!! Has ganado el premio mayor...'));
    };

    //RANKING
    const listadoRanking = (name, matches, fails) => {
        return {
            name: nombre,
            matches: aciertos,
            fails: fallos
        };
    };

    const total = listadoRanking(nombre, aciertos, fallos);
    alert(JSON.stringify('Participante : ' + total.name + ' Aciertos : ' + total.matches + ' Fallos : ' + total.fails));

    //PREGUNTAR SI DESEA JUGAR NUEVAMENTE
    var nuevamente = confirm('Desea volver a jugar nuevamente?')
    switch (nuevamente) {
        case true:
            vaciar()
            juego();
            break;
        default:
            alert('gracias por juegar al pasapalabra!!... que tenga un buen día');
    };
};

juego();































