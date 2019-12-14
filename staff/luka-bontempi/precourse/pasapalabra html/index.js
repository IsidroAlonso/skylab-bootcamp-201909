// definir variables domconst pasapalabra = document.querySelector('.pasapalabra')
const pasapalabra = document.querySelector('.pasapalabra')
const buttons = document.querySelector('.botones')
const display = document.querySelector('.display')
const letters = document.querySelector('.letters')
const startB = document.getElementById('start')
const pasapalabraB = document.getElementById('pasapalabra')
const endB = document.getElementById('end')
const stopB = document.getElementById('stop')
const sendB = document.getElementById('send')
const respuesta = document.getElementById('answer')
const feedback = document.getElementById('feedback')


// definir letras dom
const letraa = document.getElementById('a');
const letrab = document.getElementById('b');
const letrac = document.getElementById('c');
const letrad = document.getElementById('d');
const letrae = document.getElementById('e');
const letraf = document.getElementById('f');
const letrag = document.getElementById('g');
const letrah = document.getElementById('h');
const letrai = document.getElementById('i');
const letraj = document.getElementById('j');
const letrak = document.getElementById('k');
const letral = document.getElementById('l');
const letram = document.getElementById('m');
const letran = document.getElementById('n');
const letrañ = document.getElementById('ñ');
const letrao = document.getElementById('o');
const letrap = document.getElementById('p');
const letraq = document.getElementById('q');
const letrar = document.getElementById('r');
const letras = document.getElementById('s');
const letrat = document.getElementById('t');
const letrav = document.getElementById('v');
const letraw = document.getElementById('w');
const letrax = document.getElementById('x');
const letray = document.getElementById('y');
const letraz = document.getElementById('z');

time=15

function timer(){
    time -= 1;
    if (time === 0){
        endgame()
    }
}
setInterval(timer,1000)

function endgame(){
    alert("Let's dance")
}

function apear(){
    sendB.style.visibility = 'visible';
    endB.style.visibility = 'visible';
    stopB.style.visibility = 'visible';
    pasapalabraB.style.visibility = 'visible';
    startB.style.visibility = 'hidden'; 
}
function disapear(){
    sendB.style.visibility = 'hidden';
    endB.style.visibility = 'hidden';
    stopB.style.visibility = 'hidden';
    pasapalabraB.style.visibility = 'hidden';
    startB.innerHTML = 'Jugar otra vez?'
    startB.style.visibility = 'visible';
}

function randomQ(mQ){
    randomQuestions=[]
    for (let i=0;i<mQ.length;i++){
        let rnum=Math.floor(Math.random()*(5))
        randomQuestions.push(mQ[i][rnum])
    }
    return randomQuestions
}
//definir preguntas para la partida
let questions = randomQ(multiplesQuestions)

let index = 0
let letter = document.getElementById(questions[index].letter)

//pintar letra seleccionada
function selectedletter(l){
    l.style.backgroundColor = 'blue'
}

//pintar respuesta correcta
function rAnswer(l){
    l.style.backgroundColor = 'green'
}

//pintar respuesta incorrecta
function wAnswer(l){
    l.style.backgroundColor = 'red'
}

//pintar respuesta normal
function nAnswer(l){
    l.style.backgroundColor= '#76daf8'
}

//contador de puntos final
function points(p){
    points=0
    for (let i=0; i < p.length;  i++){
        points+=p[i].status
    }
    return points
}
//funcion para pasar al siguiente indice saltando respuesta falsas
function nextIndex(p,n){
    if (n === 26){
        n = 0
        if (p[n].status !== 0){
            return nextIndex(p,n)
        }
        return n
    }else if (p[n+1].status !== 0 ) {
        n++
        return nextIndex(p,n)
    } else{
        n++
        return n
    }
}
//funcion que verifica que todo ha sido completado
function completed(p){
    counter=0
    for (let i=0;i<p.length;i++){
        if (p[i].status !== 0){
            counter++
        }
    }
    return counter!==27
}

//funciones relacionadas con eventos
let responder = function(event){
    if (respuesta.value.toLowerCase() === questions[index].answer){
        questions[index].status=1
        rAnswer(letter)
        feedback.innerHTML = 'Correcto!'
        nextquestion(questions,index)
        letter = document.getElementById(questions[index].letter)
        selectedletter(l)
    } else if (answer.value.toLowerCase() === 'pasapalabra'){
        questions[index].status=0
        feedback.innerHTML = ''
        nAnswer(letter)
        nextquestion(questions,index)
        letter = document.getElementById(questions[index].letter)
        selectedletter(letter)
    }else if (respuesta.value.toLowerCase() !== questions[index].answer){
        questions[index].status=-1
        wAnswer(letter)
        feedback.innerHTML = 'Incorrecto! La respuesta correcta es ' + questions[index].answer + '.'
        nextquestion(questions,index)
        letter = document.getElementById(questions[index].letter)
        selectedletter(letter)
    }
}
let pasarpalabra = function(event){
    nAnswer(letter)
    feedback.innerHTML = ''
    nextquestion(questions,index)
    letter = document.getElementById(questions[index].letter)
    selectedletter(letter)
}
function nextquestion(q,i){
    if (completed(questions)){
        index = nextIndex(q,i)
        display.innerHTML = questions[index].question
        respuesta.value = ''
    }
    else {
        display.innerHTML = 'Felicidades! tu puntuacion es ' + points(q) + 'puntos!'
    }
    
}

//poner en relacion clicks
sendB.onclick = responder
pasapalabraB.onclick = pasarpalabra

buttons.addEventListener('click', e => {
    if (e.target.matches('button') || e.target.matches('input')) { 
        const key=e.target
        const action = key.dataset.action
        const previousKeyType = pasapalabra.dataset.previousKeyType
        if (action === 'start'){
            pasapalabra.dataset.previousKeyType = 'start'
            apear()
            display.innerHTML = questions[index].question
            selectedletter(letter)
        }if (action === "end"){
            pasapalabra.dataset.previousKeyType = 'end'
            disapear()
            }
        }
})

