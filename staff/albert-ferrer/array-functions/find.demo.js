console.log('describe: find')
console.log('describe: happy path')

var array = [12,133,2,18];
var result = 133;

function callback (arr, index) {
    return arr[index] > 100;
}

var resultFind = find(array, callback);

console.log('expect ' + resultFind);
console.log('toBe ' + result);

console.log('describe: si el campo array me lo pasas vacío')
var array1;
var result1 = 'no es una array';


try {
    var resultFind1 = find(array1, function (arr, index) {
        return arr[index] > 100;
    });
} catch (error) {
    console.log('expect ' + error.message);
}

console.log('toBe ' + result1);