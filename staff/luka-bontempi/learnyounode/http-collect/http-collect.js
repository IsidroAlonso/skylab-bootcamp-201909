const http = require('http')
var info = "";
http.get(process.argv[2], result => {
    result.setEncoding('utf8')
    result.on('data', data =>{
        info += data
    })
    result.on('error', console.error)
    result.on('end', () =>{
        console.log(info.length)
        console.log(info)
    })
})