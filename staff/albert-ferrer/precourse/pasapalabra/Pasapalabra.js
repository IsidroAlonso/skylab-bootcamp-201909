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




//Function wellcomeUser para dar la bienvenida al usuario.
const wellcomeUser=()=>{
  
  alert(`Estamos encantados de tenerte con nosotros, que tengas muchas suerte ${usuario}.`);

}

//Function "preguntas" donde se hace la primera ronda de preguntas. Las preguntas sin respuesta o errones contaran como error. Las preguntas que usen "pasapalabra irán a la siguiente ronda."
const preguntas=() =>{

  for(const index in questions){

      let preg = prompt(questions[index].question);

    if(preg === questions[index].answer){
      alert(`¡Respuesta correcta! Sigamos.`);
      questions[index].status = 'yes';
      respCorrecta +=1;

    } else if(preg === 'pasapalabra'){
      alert(`¡Dejamos la pregunta para la siguiente ronda!Siguiente pregunta.`);
      questions[index].status = 'next';
        

    } else if(preg != questions[index].answer || preg === ''){
      alert(`¡Respuesta equivocada!Vamos a por la siguiente.`);
      questions[index].status = 'no';
      respIncorrecta +=1;

    }
  }
}

//Function "siguienteRonda" que devolverá las preguntas que han sido respuestas con "pasapalabra".
const siguienteRonda=()=>{

   for(const index in questions){

     if(questions[index].status === 'next'){

       let preg = prompt(questions[index].question);
    
       if(preg === questions[index].answer){
        alert(`¡Respuesta correcta! Sigamos.`);
        questions[index].status = 'yes';
        respCorrecta+=1;

     } else if(preg === 'pasapalabra'){
      alert(`¡Dejamos la pregunta para la siguiente ronda!Siguiente pregunta.`);
      questions[index].status = 'next';

     } else if(preg != questions[index].answer || preg === ''){
      alert(`¡Respuesta equivocada! Vamos a por la siguiente.`);
      questions[index].status = 'no';
      respIncorrecta+=1; 
     
     }
   }
 } 
   
}

 //Function "statusRonda" que checkea si todas las respuestas han sido respondidas(tanto correctamente como erroneas). Si no es así volverá a ejecutar la function anterior.
const statusRondas=()=>{
  let sumaResp = respIncorrecta + respCorrecta;

  if(sumaResp != 27);
  {
    siguienteRonda();
    
  }
  
}

//Muestra de la clasificación, con el nombre del usuario + las respuestas acertadas.
/*const userRanking=()=>{

  clasificacion.push({nombre: usuario, pregAcertadas: respCorrecta});
  clasificacion.sort(function(a,b){
     return (b.respCorrecta - a.respCorrecta);
 });

  for(const posicion in clasificacion){

    alert(`Skylaber: ${clasificacion[posicion].nombre}, con un total de preguntas acertadas: ${clasificacion[posicion].pregAcertadas}`);

  }
 puntuacion();
}
*/
function useRanking(){
  if (respIncorrecta+respCorrecta===27){
  clasificacion.push({nombre: usuario, pregAcertadas: respCorrecta});
  clasificacion.sort(function(a,b){
      return (b.respCorrecta-a.respCorrecta);
  });

  for(const posicion in clasificacion){
  alert(`Jugador: ${clasificacion[i].nombre}, letras acertadas: ${respCorrecta}, letras falladas: ${respIncorrecta}, puntuación: ${clasificacion[i].respCorrecta} puntos.`);
  }
}else{
  return false;
}
};


//Function "puntuacion" que comprueba el num. de respuestas correctas, con las incorrectas. En función del resultado, dará una un mensaje de victoria, otro de animos(derrota) y un último de empate.
/*const puntuacion=()=>{

  if(respCorrecta > respIncorrecta){
    alert(`¡Enhorabuena erudito/a Skylaber! Has logrado acertar ${respCorrecta} respuestas. ¡La victoria es tuya!`);

  } else if(respCorrecta < respIncorrecta){
    alert(`Has acertado ${respCorrecta} respuestas. Por otro lado, has fallado ${respIncorrecta}. ¡Suerte en la próxima partida!`);

  } else if(respCorrecta === respIncorrecta){
    alert('¡Hay empate!¿Otra ronda?');
  }
  
}
*/

//Function que contiene la llamada de las demás Functions. Ejecuta el juego.
const playGame = ()=>{

  wellcomeUser();
  preguntas();
  siguienteRonda();
  statusRondas();
  userRanking();
  

  }


//variables para llevar el recuento de preguntas correctas/erroneas. Y array para la clasificación.
  let respCorrecta = 0;
  let respIncorrecta = 0;
  const clasificacion = [];
  
  let usuario = prompt('¡Bienvenido a Pasapalabra! ¿Cómo te llamas?');
  


playGame();
