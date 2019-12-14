const fs = require('fs')

fs.readFile(process.argv[2],'utf8',(error, result) => console.log(result.split('\n').length-1))
