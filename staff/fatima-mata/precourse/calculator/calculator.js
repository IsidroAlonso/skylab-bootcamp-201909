/* 
CALCULATOR
Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca 
cualquier cosa que no sean números.
Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, 
si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
*/

requestNumber();

/*
Se declara la función requestNumber que solicita al usuario que introduzca números a través de un prompt, verifica los datos introducidos y, si el ususario ha introducido algún número,
llama a la función calculate.
*/

function requestNumber() {

	let num1 = prompt("Please, enter number: ");
	let num2 = prompt("Please, enter another number: ");

	if ((isNaN(num1) && (isNaN(num2))) || ((num1 === "") && (num2 === ""))) {
		console.log("Error: None of the numbers is correct.");
	} else if ((isNaN(num2)) || (num2 === "")) {
		calculate(num1);
	} else {
		if (isNaN(num1) || (num1 === "")) {
			calculate(num2);
		} else {
			calculate(num1, num2);
		}
	}

}

/*
Se declara la función calculate. Si el usuario introduce un número, calculará su raiz cuadrada y, si introduce dos números, calculará las operaciones correspondientes (+,-,*,/).
*/

function calculate(param1, param2) {
	if (arguments.length == 1) {

		console.log("Square Root: " + Number(Math.sqrt(param1)).toFixed(3));

	} else if (arguments.length == 2) {

		let sum = Number(parseInt(param1) + parseInt(param2)).toFixed(3);
		let subtraction = Number(param1 - param2).toFixed(3);
		let multiplication = Number(param1 * param2).toFixed(3);
		let division = Number(param1 / param2).toFixed(3);


		console.log("results = [ " + param1 + " + " + param2 + " = " + sum + ", " + param1 + " - " + param2 + " = " + subtraction
			+ ", " + param1 + " x " + param2 + " = " + multiplication + ", " + param1 + " / " + param2 + " = " + division + "]");
	}
}