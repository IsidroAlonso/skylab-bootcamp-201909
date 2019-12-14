/* 

CALCULATOR PROJECT  
Step by step:

1) 3 decimals maximum, (.tofixed) it's used to limit decimals 
2) The operation should have 2 parameters
3) If it only have 1 parameter, we should give the square root (.sqrt) 
4) Start from 0 the calculator (empty space) and save user input in the calculator
5) All the operations and cases we can have
6) Continue calculating or not? Question for the user, decition to take
7) If YES, re-execute all the functions to start again

*/

// 1)

function num(x) {
    if (!Number.isInteger(x)) {
    return Number.parseFloat(x.toFixed(3));
  }
  else {
    return x;
  }
}


  // 2)
  
  const add = function(num1, num2) {
    let operation = num1 + num2;
    return num(operation);
  };
  const sub = function(num1, num2) {
    let operation = num1 - num2;
    return num(operation);
  };
  const mul = function(num1, num2) {
    let operation = num1 * num2;
    return num(operation);
  };
  const div = function(num1, num2) {
    let operation = num1 / num2;
    if(num2 === 0) {
      return "ERROR, that action is not possible to be executed"
    } else {
      return num(operation);
    }
  };


// 3)

const sqrt = function(num1) {
    let operation = Math.sqrt(num1);
    return num(operation);
  };


// 4)

let userInput = [];

function emptySpace() {
    userInput = [];
}


// 5)

function operations() {
var num1 = prompt("Please enter number1")
var num2 = prompt("Please enter number2")
let resultOperations = [];


if (num1 === null || num1 === "") {
    console.log(sqrt(num2)) 
}

else if (num2 === null || num2 === "") {
    console.log(sqrt(num1));
}

else if (isNaN(num1) || isNaN(num2)) {
    console.log("Calculator is only available to use numbers");

}
else {

num1 = parseFloat(num1);
num2 = parseFloat(num2);
resultOperations.push( add(num1, num2), sub(num1, num2), mul(num1, num2), div(num1, num2));

console.log(`${num1} + ${num2} = ${resultOperations[0]}`);
console.log(`${num1} - ${num2} = ${resultOperations[1]}`);
console.log(`${num1} x ${num2} = ${resultOperations[2]}`);
console.log(`${num1} / ${num2} = ${resultOperations[3]}`);

}
};

// 6)

function endGame() {
  console.log("Thanks for playing, see you next time!");

};


// 7)

function recalculate() {
    var message;
    var option = confirm("Click on Accept to continue or Cancel if you want to restart the process");
    if (option = true) {
        message = "OK you can continue";
        calculator();
      
    } 
    
    else {
	     endGame();
    }
}


// 8)

function calculator() {
emptySpace()
operations()
recalculate()

}

calculator();

// Once we have arrived to this point, the process starts again. GO UP!