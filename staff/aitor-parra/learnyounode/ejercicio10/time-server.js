const net = require('net')
const { argv: [, , port = 8080 ] } = process

const server = net.createServer(socket => { 
    
        const date = new Date
        const year = date.getFullYear() 
        const month = date.getMonth() +1// starts at 0 
        const day = date.getDate() // returns the day of month 
        const hour = date.getHours()
        const minutes = date.getMinutes()

        socket.end(year + '-' + month + '-0' + day + ' ' + hour + ':' + minutes+'\n')

         
         
          
        

    // socket handling logic  
  })  
  server.listen(port)  

  /* 'use strict'
    const net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2])) */