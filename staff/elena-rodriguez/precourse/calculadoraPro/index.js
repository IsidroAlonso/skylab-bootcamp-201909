var num1 = prompt('introduce a number');
var num2 = prompt('introduce another number or nothing');

function calculator(num1, num2) {
var resultArray = []; // array with final results

    // Check first argument : if it's empty
    if (num1.length === 0) {
        num2 = Number(num2);
        if (isNaN(num2)){
            console.log('You have to introduce at least one number as argument') 
            return
            }
        else {
            var resultSqrt = Math.sqrt(num2);
            resultSqrt = resultSqrt.toFixed(3)
            var stringSqrt = 'Sqrt of ' + num2 + ' = ' + resultSqrt
            // created array in desired format using results
            resultArray.push(stringSqrt)
            return resultArray;
        }

    } 
    // in case first argument is not empty but is not a number
    else {
        num1 = Number(num1);
        if (isNaN(num1)) {
            console.log('You have to introduce a number as first argument')
            return
        }
    }
  
    // We have a number in first argument, then check second argument : if it's empty
    if (num2.length === 0) {
        var resultSqrt = Math.sqrt(num1);
        resultSqrt = resultSqrt.toFixed(3)
        var stringSqrt = 'Sqrt of ' + num1 + ' = ' + resultSqrt
        resultArray.push(stringSqrt)
        return resultArray
    }
    //if second argument is not empty but it's not a number
    else {
		num2 = Number(num2);
		if (isNaN(num2)){
        console.log('You have to introduce a number as second argument or let it empty') 
        return
        } else {
   // if second argument is a number, main operations
	var resultAdd = num1 + num2;
	resultAdd = resultAdd.toFixed(3);
	var stringAdd = num1 + ' + ' +num2 + ' = ' + resultAdd;
	var resultSub = num1 - num2;
	resultSub = resultSub.toFixed(3);
	var stringSub = num1 + ' - ' +num2 + ' = ' + resultSub;
	var resultDiv = num1 / num2;
	resultDiv = resultDiv.toFixed(3);
	var stringDiv = num1 + ' * ' +num2 + ' = ' + resultDiv;
	var resultMult = num1 * num2;
	resultMult = resultMult.toFixed(3);
	var stringMult = num1 + ' / ' +num2 + ' = ' + resultMult;
	
	resultArray.push(stringAdd,stringSub,stringDiv,stringMult)
   console.log(resultArray[0]);
   console.log(resultArray[1]);
   console.log(resultArray[2]);
   console.log(resultArray[3]);

};
    }
};

calculator(num1,num2);

var question = prompt("New numbers? y/n");
while (question === 'y') {
    var num1 = prompt('introduce a number');
var num2 = prompt('introduce another number or nothing');
calculator(num1,num2); question = prompt("New numbers? y/n")
};
if (question === 'n') {console.log('Bye!');}





