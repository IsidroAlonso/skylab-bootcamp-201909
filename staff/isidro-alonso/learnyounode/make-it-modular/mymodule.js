const fs = require('fs')
const path = require('path')

module.exports = (folder, extension, callback) => {
    fs.readdir(folder, (error, list) => {
        if (error) {
            return callback(error)
        } else {
            list = list.filter((file) => {
                return path.extname(file) === '.' + extension
            })
            callback(null, list)
        }
    })
}