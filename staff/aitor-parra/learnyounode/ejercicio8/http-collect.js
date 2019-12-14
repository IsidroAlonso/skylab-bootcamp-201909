const http = require('http')

let url = process.argv[2]

const request = http.get(url, res => {
    res.setEncoding('utf8')

    res.on('error', function (error) {throw error})

    
    let content = ''

    res.on('data', function (chunk) {content = content + chunk})
    res.on('end', function () {console.log(content.length + '\n' + content)})
})

request.on('error', error => {throw error })