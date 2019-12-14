const fs = require('fs')
const http = require('http')

const { argv: [, , port = 8080, file ] } = process

const server = http.createServer( (req, res) => { 

    const data = fs.createReadStream(file)

    res.writeHead(200,  {'content-type': 'text/plain'})

    //http.get(req)

    //http.send(res)
    
    data.pipe(res)    
    

})

server.listen(port)

/* 
'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2])) 
*/