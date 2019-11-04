const fs = require('fs')
const path = require('path')
const extension = '.' + process.argv[3]

fs.readdir(process.argv[2], (error, list) => {
    if (error){
        console.log(error)
    } else {
        list.forEach((file) => {
            if (path.extname(file) === extension) {
                console.log(file)
            }
        })
    }
})