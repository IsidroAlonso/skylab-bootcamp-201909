function Bingo () {

    var card, user, history;
    
    const NUMBERS = 5;
    const MIN = 0;
    const MAX = 20;
    const REPLACE = 'X';
    
    function initialize () {   //Function local donde se pide el nombre del usuario. Aparte dos funciones dentro (locales).
      user = prompt('Hey, what\'s your name?');
      display(`Let's play, ${user}!`);
      
      start();
    }

    function start () {
      history = []; 
      card = generateCard(MIN, MAX, NUMBERS); //  Genera un nuevo cartón
      
      display(`The card is: ${card}`);
      play();
    }
  
    function display (message) {
      
      alert('Wellcome to Skylab Bingo deLuxe. ' + message);

    }
    
    function play () {        /* Function que comprueba si el numero Random está en la Array. Si esta lo cambiara por 'X' . */

      var randomNumber = generateNumber(MIN, MAX);

      history.push(randomNumber);

      display(`Oh we get a ${randomNumber}`);
                                                  
      check(card, randomNumber, REPLACE);

      if (win (card, REPLACE)) {

        return end();     /* Comprueba si el Array lleno de 'X'. Si es así, muestra el final del juego. De lo contrario, pide al usuario un nueva juego. */

      } else {

        var nextNum = confirm('Next number?');

        if (nextNum) {

            return play();

        } else {
            
            display(`Better luck next time.`);

        }
      }
    }
    
    function generateNumber (min, max) { /* Esta función genera un número al azar entre min(0) y max. (20).*/
      
      return Math.floor(Math.random() * (max - min + 1)) + min;

    }
    
  
    function generateCard (min, max, n) { /* Función que genera el cartón al azar*/ 
      var card = [];
      for (var i = 0; i < n; i++) {
        card.push(generateNumber(min, max));
      }
      return card;
    }
  
  
    function check (array, value, replace) {  /* En esta función, checkea si el valor esta en el array. Si lo esta lo reemplazará. */
     
      for (var i = 0; i < array.length; i++) {

        if (value === array[i]) {
            
            return array[i] = replace;

        }

      }
      
    }
    
    function win (array, char) {  /* Se checkea si el array esta lleno del caracter (tiene que haber todo 'X') y retorna true o false. */

      var result = true;

      var i = 0;
      
      while (i < array.length) {

        if (char !== array[i]) {

          result = false;
          
          break;
        }

        i++;
      }
      
      return result;
    }
    
    function end () {  /*Una vez los nuemeros han sido reemplaados display da el mensaje de ganador. Se preguntará si el usuario quiere jugar otra vez.*/
      display(`Well played, ${user}!`);

      var again = confirm('Wanna play more?');

      if (again) {
          
        return start();

      } else { 
          
        display(`See you later, ${user}.`);

      }

    }
    
    initialize();
  }
  
  Bingo();