const fs = require('fs')

let buf = fs.readFileSync(process.argv[2])

let result = buf.toString()

console.log(result.split('\n').length-1)