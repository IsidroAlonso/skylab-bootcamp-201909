const http = require('http')
http.get(process.argv[2], result => {
    result.setEncoding('utf8')
    result.on('data', console.log)  
    result.on('error', console.error)
})
