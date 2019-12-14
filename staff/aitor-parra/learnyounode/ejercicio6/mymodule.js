const fs = require('fs')
const path = require('path')

module.exports = function (directory_name, file_extension, callback) { 

    fs.readdir(directory_name, function(err, list) { 
    
        if(err) return callback(err)
    
        list = list.filter(file => path.extname(file) === '.' + file_extension)
        
        callback(null, list)
        
    });
}

//fs.readdir(path[, options], callback)
 /* const fs = require('fs')
const path = require('path')
module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })
    callback(null, list)
  })
} */

