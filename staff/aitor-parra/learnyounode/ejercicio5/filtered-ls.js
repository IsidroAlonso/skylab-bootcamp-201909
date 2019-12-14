//Create a program that prints a list of files in a given directory,  filtered by the extension of the files.
const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function callback (err, list) { 
    
    if(err) throw err

    const files = list.filter(file => path.extname(file) === '.md')
    
    files.forEach(file => {
        
        console.log(file)
    });
 })


/*  'use strict'
 const fs = require('fs')
 const path = require('path')
 
 const folder = process.argv[2]
 const ext = '.' + process.argv[3]
 
 fs.readdir(folder, function (err, files) {
   if (err) return console.error(err)
   files.forEach(function (file) {
     if (path.extname(file) === ext) {
       console.log(file)
     }
   })
 }) */

