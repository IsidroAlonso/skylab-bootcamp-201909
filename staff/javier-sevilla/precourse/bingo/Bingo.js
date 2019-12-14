// Declaraciones variables globales y funciones

let randomNumber = 0;
let randomName = 0;
let randomPoints = 0;
let user = '';
cosnt = totalBolas = 20;

var bingoCard = [
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false }
];

var userRanking = [
    { name:"Carlton", points:100 },
    { name:"FreshPrince", points:200 },
    { name:"TioPhil", points:300 }
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

function cargarCarton() {
    let i, j, k, x, y, z;
    let arr = [];
    let numCarton;
    //k = 100;
    for (i = 0; i < bingoCard.length; i++) {
        numCarton = numRandom(totalBolas)
        numCarton = validarArr(arr, numCarton)
        arr.push(numCarton);
        bingoCard[i].number = numCarton
        bingoCard[i].matched = false           
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

function validarArr(arr, num) {
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] === num) {
            num = numRandom(totalBolas)
            num = validarArr(arr, num)
         }   
     }  
     return num;         
};

function tratarCarton() {
   let stringCarton = muestraCarton();
   let noFin = true
   let aceptamos;
   let i;
   do{
      aceptamos = prompt(stringCarton + 
                         "\n Desea cambiar el carton? 'yes' o cancelar");
      if(aceptamos != "yes" && aceptamos != null) {
         alert("Introduzca 'yes' o cancelar")
      } else if (aceptamos === "yes") {
                 for (i = 0; i < bingoCard.length; i++) {
                    bingoCard[i].number = 0
                    bingoCard[i].matched = false
                 }
                 cargarCarton();
                 //console.log(bingoCard)
                 stringCarton = muestraCarton();
                 //console.log(stringCarton)
      } else {
        noFin = false
      } 
   } while(noFin)
}; 

function muestraCarton() {
  let stringCarton = "CARTON : \n ";
  let i;
  let num;
  for (i = 0; i < bingoCard.length; i++) {
     if (i === 5 || i === 10) {
        stringCarton += " \n "
     }
     if (bingoCard[i].matched === false) {
        num = bingoCard[i].number;
        stringCarton += num + " - ";
     } else { 
        num = "X";
        stringCarton += num + " - ";
     }   
   }
   return stringCarton;
};

function muestraCartonOriginal() {
   let stringCarton = "CARTON ORIGINAL: \n ";
   let i;
   let num;
   for (i = 0; i < bingoCard.length; i++) {
      if (i === 5 || i === 10) {
         stringCarton += " \n "
      }
      num = bingoCard[i].number;
      stringCarton += num + " - "; 
    }
    return stringCarton;
 };

function mensajeBingo(mensaje) {
    alert(mensaje);
};

function nuevoTurno(num) {
   let confirmacion;
   confirmacion = confirm("Nº " + num);  
   return confirmacion;
};

function checkCarton(num) {
   let i;
   let encontrado = false;
   let stringCarton;
   let stringCartonoriginal;
   for (i = 0; i < bingoCard.length; i++) {
      if (bingoCard[i].number === num) { 
          bingoCard[i].matched = true
          encontrado = true
          i = 99999;
      }            
   }
   if (encontrado === false) {
      alert("No tiene el número cantado");
   } else {
      stringCarton = muestraCarton(); 
      stringCartonoriginal = muestraCartonOriginal();
      alert(stringCarton  + "\n " + "\n " + stringCartonoriginal);
   }
};

function checkLinea() {
   let i;
   let linea = true;
   for (i = 0; i < 5; i++) {
      if (bingoCard[i].matched === false) { 
         linea = false
         i = 99999
         
      }            
   }
   if (linea) {
      return linea;
   }

   linea = true;
   for (i = 5; i < 10; i++) {
      if (bingoCard[i].matched === false) { 
         linea = false
         i = 99999
         
      }            
   }
   if (linea) {
      return linea;
   }

   linea = true;
   for (i = 10; i < bingoCard.length; i++) {
      if (bingoCard[i].matched === false) { 
         linea = false
         i = 99999         
      }            
   }
   return linea;
};

function checkBingo() {
   let i;
   let bingo = true;
   for (i = 0; i < bingoCard.length; i++) {
      if (bingoCard[i].matched === false) { 
         bingo = false
         i = 99999         
      }            
   }
   return bingo;
};

function SistemaPuntos() {
    alert("Sistma puntos por usuario: " + 
          "\n" + "1- Se empieza la partida con 1000 puntos" + 
          "\n" + "2- por cada bola sacada se resta 5 puntos")
 };

function mostrarRanking() {
    let i, j;
    let stringRanking = "";
    userRanking.sort(function(a, b){return b.points - a.points});
    for (i = 0; i < userRanking.length; i++) {
        j = i + 1;
        stringRanking += j + "- " + userRanking[i].name + 
                         " Puntos: " + userRanking[i].points + " \n";  
     }
     alert("RANKING: " + "\n" + stringRanking);
 };

 function addRanking(user, points) {
    let ranking;
    ranking = { name: user,
        points: points
      };
      userRanking.push(ranking);
 };

// Empezamos proceso

function Bingo() {
   let noFinTotal = true;
   let noFin = true
   let seguimos = true;
   let linea = false;
   let lineaNoCantada = true;
   let arr = [];
   let totalNum = 0;
   let totalPuntos = 0;
   do {
      pedirUser();
      SistemaPuntos();
      mostrarRanking();
      cargarCarton();
      tratarCarton();
      mensajeBingo("EMPEZAMOS PARA BINGO");
      
      noFin = true
      seguimos = true;
      linea = false;
      lineaNoCantada = true;
      arr = [];
      totalNum = 0;
      totalPuntos = 0;
      do {
         randomNumber = numRandom(totalBolas);
         randomNumber = validarArr(arr, randomNumber);
         arr.push(randomNumber);
         totalNum = totalNum + 1
         seguimos = nuevoTurno(randomNumber);    
         if (seguimos) {
            checkCarton(randomNumber)
            
            if (lineaNoCantada) {
               linea = checkLinea();
               if (linea) {
                  alert("LÍNEA!");
                  lineaNoCantada = false;
               }
            }
            
            bingo = checkBingo();
            if (bingo) {
               alert("BINGO!");
               totalPuntos = 1000 - (totalNum * 5)
               addRanking(user, totalPuntos) 
               alert(" ¡Ha finalizado el juego!" +  
               "\n Ha obtenido un total de: " + 
               totalPuntos + " puntos");      
               noFin = false;            
            }
      
         } else {
            alert(" ¡Ha finalizado el juego!");
            noFin = false;
         }
      
      }while(noFin)

      switch (prompt("Jugar de nuevo? y/n")) {
         case 'y': 
            'Hola';
             break;
         default: 
             noFinTotal = false
             break;       
      }
   } while(noFinTotal)
};
Bingo();