const fs = require('fs')  

const a = fs.readFileSync(process.argv[2],'utf8').split('\n')
console.log(a.length-1)