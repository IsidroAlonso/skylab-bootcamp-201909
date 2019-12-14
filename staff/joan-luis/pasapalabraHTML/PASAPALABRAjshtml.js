
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",question2:"CON LA A. Secuestro por seres de otros planetas"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",question2:"CON LA B. Juego de azar en el que cada participante compra uno o más cartones con unos números impresos y de un bombo se extraen al azar, una a una, bolas que llevan números grabados"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé",question2:"CON LA C. Ser humano de corta edad, en especial el que no ha llegado a la pubertad"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",question2:"CON LA D. Coloquialismo que define a aquellas personas con ideas mezcladas e inconexas"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",question2:"CON LA E. Cobertura de algunas células"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",question2:"CON LA F. Que no requiere mucho esfuerzo"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",question2:"CON LA G. Concentrada en una determinada región del espacio por efecto de la atracción gravitatoria"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento",question2:"CON LA H. Ritual de origen japonés que se realiza por razones de honor"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano",question2:"CON LA I. El único lugar donde està vien visto que un sacerdote beba vino"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",question2:"CON LA J. Animal feo, peludo y peligroso que habita la serra de collserola"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria",question2:"CON LA K. Accion que describe a los pilotos japonenes en la segunda guerra mundial"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo",question2:"CON LA L. Es en la mitológica habilidad o poder que tiene un ser humano para transformarse en un chucho"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",question2:"CON LA M. Persona que muestra antipatía por los seres humanos"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia",question2:"CON LA N. Que insiste en los propios errores o se aferra a ideas o posturas equivocadas. (nombre femenino)"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",question2:"CONTIENE LA Ñ. Rasgo físico que permite reconocer o distinguir a una persona o cosa de las demás"},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",question2:"CON LA O. Que son unas criaturas ficticias de la mitología celta, tambien es uno de los personajes usado por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",question2:"CON LA P. Raza de la saga de videojuego starcraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",question2:"CON LA Q. Se obtiene de la madiracion de la leche natural"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor",question2:"CON LA R. Periferico usado para interacturar con facilidad en ventanas"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático",question2:"CON LA S. Desbordamiento de pila en inglés"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",question2:"CON LA T. Robot con aspecto humanoide enviado al pasado para asesinar al jefe de la resistencia"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",question2:"CON LA U. (1864-1936) Escritor español-En las novelas, proyecta su agitada personalidad en personajes austeros y aislados del paisaje y el medio"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",question2:"CON LA V. Pueblo escandinavo expertos en la navegacion"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",question2:"CONTIENE LA W. Bocadillo en inglés"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",question2:"CONTIENE LA X. Producto inyectable para dar aspecto juvenil"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",question2:"CONTIENE LA Y. Planta cactácea no espinosa, de pequeño tamaño y cubierta de pelos sedosos que contiene mescalina, alcaloide que produce efectos narcóticos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",question2:"CON LA Z. Sistema filosófico budista que tuvo su origen en China en el siglo VI; se caracteriza por potenciar la meditación metafísica"},
]

function initiation(){
    var bntPlay=document.getElementById('btnPlay');
    var txtWord=document.getElementById('word');
    var bntOk=document.getElementById('OK');
    var btnPasapalabra=document.getElementById('pasapalabra');
    var btnStop=document.getElementById('stop');
    var auxIdx=0;
    var auxDefinition=document.getElementById('textoDefinicion')
    
    bntPlay.onclick=function(e){
        var definition="";
       
        showElements();
        definition=getDefinition(questions,0,1);
        auxDefinition.textContent=definition;
    }

    bntOk.onclick=function(e){
        debugger;
        var auxWord=txtWord.textContent;
        if(auxWord==""){
            alert("Enter a word, please and press a button OK");
        }else{
            
            foundWord(questions, auxWord,auxIdx);
        };
    }

    btnPasapalabra.onclick=function(e){
        auxIdx=auxIdx+1;
        version=1;
        getDefinition(questions,auxIdx,version);
    }

}

function showElements(){
    document.getElementById('funciones').style.display = 'inline';
    document.getElementById('definiciones').style.display = 'inline';
}

function foundWord(auxQuestion, word,idx){
    
    if (auxQuestion[idx].answer==word){
        auxQuestion[idx].status=1;
        //funcio que canvía el color dels cercles
        //actualitza marcador
    }else if (auxQuestion[idx].answer!=word){
        auxQuestion[idx].status=2;
    };
};

function getDefinition(auxQuestion,idx,auxVersion){
    
    var definition="";
    if (auxVersion==1){
        definition=auxQuestion[idx].question;
    }else if (auxVersion==2){
        definition=auxQuestion[idx].question2;
    };
    
    return definition;
};

function ChangeColorLetter(idLetter){
    //Cada cop que presentem un definicio, el cercle es posa orange
    //Si l'endevina, ver i sino, vermell
}





