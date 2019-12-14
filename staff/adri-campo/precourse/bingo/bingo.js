//  BINGO PROJECT

// Function to welcome the user

function welcome() {
  let userName = "";
  
  userName = prompt("Hi, welcome to Skylab Bingo! What's your name?");
  
  userName ?  alert(`Hello, ${userName}! Here you have your carton!`) : 
              alert("Hello! Here you have your carton!")

  };

// Function to get the initial carton

function carton() {
  console.log("Your carton is:")
  var carton = [];
  for (i = 0; i < 5; i++) {
      carton.push(differentNumber());
  }
  return carton;
};

// Function to get different random numbers

var myNumbers = [];

function getNumber() {
  var numberRandom = Math.floor(Math.random() * 19 + 1)
  return numberRandom
};

function differentNumber() {
  var number = getNumber();

  while (myNumbers.indexOf(number) > -1) {
    number = getNumber();
  }
 
   myNumbers.push(number);

   return number;
}

// Full game function 

function bingo() {

var initialCarton = carton();
myNumbers = [];
var complete = ["X","X","X","X","X"];
var numberCounter = 0;

welcome();

console.log(initialCarton.join(' - '));


function anotherNumber() {    // function to ask for another number to the user
  var option = confirm ("Next number?");
  if (option) {
    numberCounter++
    continueGame();
  }
  
  else { 
    playAgain();
  }
  
  };

anotherNumber();


function continueGame(){      // function to generate new number each turn and put and X if you already have it

var newNumber = differentNumber();
myNumbers.push(newNumber);
window.alert("You've got number " + newNumber)


  for (let i = 0; i < initialCarton.length; i++) {

  var match = initialCarton.indexOf(newNumber);

  if (match > -1) {
    initialCarton[match] = "X";
      window.alert("We have the number " + newNumber + ", great!");
      console.log(initialCarton.join(' - '));
  } else {
      return anotherNumber();
  }
  return fullCarton();
  }


function fullCarton() {        // function to check if all our numbers have changed by X (and how many turns we used)
  if (initialCarton.toString() === complete.toString()) {
      window.alert('¡BINGO!\n The game have been completed in ' + numberCounter + ' turns!');
      return playAgain();
  } else {
      return anotherNumber();
  }
  }

};

function playAgain() {        // function to ask the user to play again
  newGame = confirm("Do you want to play again?")
  if(newGame === true) {
  bingo();
  } 

  else {
  endGame();
  }

};


function endGame() {          // function to finish the game
  window.alert("Thanks for playing, see you soon!");
  return;
};

};

bingo();