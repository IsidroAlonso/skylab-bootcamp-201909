function find(array, expression) {

    for (var i = 0; i < array.length; i++) {
        if (expression(array[i])) {
            return array[i];
        }
    }

    return -1;

};

var arr = [12, 5, 8, 130, 44];
var exp = function (x) {
    return x < 6;
}

console.log(find(arr, exp)) // 5

var expression = function (x) {
    return x < 2;
}

console.log(find(arr, expression)) // -1

var arr = ['a','b','c'];
var expression = function (x) {
    return x === 'b';
}

console.log(find(arr, expression)) // 'b'