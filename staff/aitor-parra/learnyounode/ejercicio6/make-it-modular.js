const filterFunction = require('./mymodule.js')

filterFunction(process.argv[2],process.argv[3], function (err, list) {

    if(err) return err
    list.forEach(function (file) {
        console.log(file)
    })
})






/*  'use strict'
   const filterFn = require('./module.index.js')
   const dir = process.argv[2]
   const filterStr = process.argv[3]
   filterFn(dir, filterStr, function (err, list) {
     if (err) {
       return console.error('There was an error:', err)
     }
     list.forEach(function (file) {
       console.log(file)
     })
   }) */

  // -> node node, pathnode, Path, FileExtension, 