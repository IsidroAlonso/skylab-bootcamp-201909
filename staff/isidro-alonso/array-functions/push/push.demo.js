console.log('DEMO push');

var array = [1, 2, 3];

console.log('should push a single item');
console.log(push(array, 4)); // 4
console.log(array); // [1, 2, 3, 4]

console.log('should push a multiple items');
console.log(push(array, 'a', 'b', 'c')); // 7
console.log(array); // [1, 2, 3, 4, 'a', 'b', 'c']

console.log('testing message errors');
console.log(push());
console.log(push(23,'ab'));