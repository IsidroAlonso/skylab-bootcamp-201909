console.log('DEMO sort');

var array = ["hola","adios","abc", 2, 5, 10, 25]

console.log('should sort the array upwards by default');
console.log(sort(array)); // "[ 10, 2, 25, 5, 'abc', 'adios', 'hola' ]"
console.log('should sort the array upwards');
console.log(sort(array,(a,b)=>a+b)); // "[ 10, 2, 25, 5, 'abc', 'adios', 'hola' ]"
console.log('should sort the array downwardly');
console.log(sort(array,(a,b)=>a-b)); // "[ 'hola', 'adios', 'abc', 5, 25, 2, 10 ]"