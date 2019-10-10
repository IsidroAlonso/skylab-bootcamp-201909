var a = 10

var b

(function(x) {
	var c = x * 2 // variable 'c' only lives during the execution of the function and it does not pollute the global context

	b = c	
})(a)

console.log(a) // 10
console.log(b) // 20
console.log(window.c) // undefined
