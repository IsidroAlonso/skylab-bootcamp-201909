// 1

function fun(n) { return function(m) { return m * n; } }

var fun2 = fun(2);

console.log(fun2(4));
console.log(fun2(6));
console.log(fun2(8));

var fun3 = fun(3);

console.log(fun3(4));
console.log(fun3(6));
console.log(fun3(8));

console.log(fun(4)(4));
console.log(fun(4)(6));
console.log(fun(4)(8));