// $ node cp hello-world.txt hello-world-2.txt

const fs = require('fs')

const {argv: [, , from, to]} = process
fs.readFile(from, /*'utf8'*/ (err, content) => {
    // debbuger
    if (error) throw error
    fs.writeFile(to, content, error => {
        if (error) throw error 
    })
})