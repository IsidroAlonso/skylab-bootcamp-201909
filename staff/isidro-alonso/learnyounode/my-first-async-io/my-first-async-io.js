const fs = require('fs')

fs.readFile(process.argv[2], (error, buf) => {
    if (error){
        console.log(error)
    } else {
        result = buf.toString().split('\n').length-1
        console.log(result)
    }
})
