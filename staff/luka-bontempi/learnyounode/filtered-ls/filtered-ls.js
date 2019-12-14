const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2],(error, result) => (result.filter(element =>path.extname(element) === '.' + process.argv[3]).forEach(element =>console.log(element))))
