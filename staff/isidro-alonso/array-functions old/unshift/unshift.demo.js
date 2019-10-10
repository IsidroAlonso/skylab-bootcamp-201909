console.log('DEMO unshift - está mal');

var array = [1, 2, 3];

console.log('should add a single item at the beginning of the array');
console.log(unshift(4)); // 4
console.log(unshift(4, array)); // [4, 1, 2, 3]

console.log('should add a multiple items at the beginning of the array');
console.log(unshift(['a', 'b', 'c'])); // 'a', 'b', 'c'
console.log(unshift(['a', 'b', 'c'], array)); // ['a', 'b', 'c', 4, 1, 2, 3]