console.log('DEMO map');

var array = [1, 4, 9];

console.log('should multiply the values of the array per 2');

console.log(map(array, function(x) { return x * 2 })); //  [2, 8, 18]

console.log('should make the square root of the values of the array');

console.log(map(array, function(x) { return Math.sqrt(x) })); // [1, 2, 3]