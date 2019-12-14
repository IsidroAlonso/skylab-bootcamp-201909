const fs = require('fs')

let buf = fs.readFileSync(process.argv[2])
        // ie: /Users/user/Desktop/RUBBISH BIN_bootcamp/exemple_manu_SPA.js
const str = buf.toString()
const result = str.split('\n').length-1
        /* const result = str.split('\n') */

console.log(result)