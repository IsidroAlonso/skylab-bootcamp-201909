// 1

var a = 1

function fun() {
	console.log(a) // undefined

	var a
}

fun()

// 2

var a = 1

function fun() {
	console.log(a) // undefined

	var a = 2
}

fun()