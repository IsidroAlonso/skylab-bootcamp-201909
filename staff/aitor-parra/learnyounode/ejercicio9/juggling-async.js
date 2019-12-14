const http = require('http') 


const { argv:  [, , ...urls] } = process 

debugger
const output = [];
let counter = 0;

urls.forEach((url, index) => {
    const request = http.get(url, res => {        
        res.setEncoding('utf8')      
        res.on('error', error => {throw error})
        let content = ''

    res.on('data', chunk => { content += chunk })

    res.on('end', () => {
        output[index] = content
        
        ++counter === urls.length && output.forEach(out => console.log(out))
        })


})

    request.on('error', error => {throw error})

})

/* 'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0
    
    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
 */
