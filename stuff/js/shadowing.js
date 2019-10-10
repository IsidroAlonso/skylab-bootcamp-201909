// 1

var a = 0

function fun(x) { 
	var a = x

	console.log(a)

	function fun(x) { 
        var a = x

        console.log(a)

		function fun(x) { 
            var a = x

            console.log(a)
        }

		fun(3)
    }

	fun(2)
}

fun(1)

// 2

var a = 0

function fun(x) { 
	var a = x // [1]

	console.log(window.a) // outer scope can be reached through global context (window)

	function fun(x) { 
        var a = x

        console.log(a) // variable 'a' in outer scope [1] cannot be reached, because it's related to any context

		function fun(x) { 
            var a = x

            console.log(a)
        }

		fun(3)
    }

	fun(2)
}

fun(1)