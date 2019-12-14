const mymodule = require('./mymodule.js') 

const { argv: [, , directory, type] } = process

mymodule(directory, type, function(error, results){
    if (error) throw error
    results.forEach(result =>   
        console.log(result)  
        )  
    })



