const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (error, list) => {
    if (error) throw error
    else {
        list.forEach((file) => {
            console.log(file)
        })
    }
})