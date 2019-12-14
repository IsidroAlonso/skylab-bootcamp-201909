const fs = require('fs')
const path = require('path')
module.exports = function filterMachine(directory, type, callback){ 
    fs.readdir(directory,(error, result) => {
        if (error) return callback(error)
        const li = result.filter(element =>path.extname(element) === '.' + type)
        callback(undefined, li)
})}

