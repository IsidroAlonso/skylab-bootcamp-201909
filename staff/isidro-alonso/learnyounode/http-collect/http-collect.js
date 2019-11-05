const http = require('http')
const fs = require('fs')

let buf = fs.readFileSync(process.argv[2])

http.get(buf, (response) => {
    // let data = 'data'
    // let buf = fs.readFileSync(process.argv[2])
    // let dataLength = response.on(buf, buf.toString().length)
    // let dataString = response.on('data', buf.toString())
    response.on(buf, (error, data) => {
        if (error) {
            return console.error(error)
        }
        data = buf.toString()
        console.log(data.length)
        console.log(data)

        // manu ha hecho lo mismo que en el anterior pero llamando a chucks
        // let content = ''
        // .on('data', chunk => content += chunk)
    })
    // let buf = fs.readFileSync(process.argv[2])

    // response.on('data', console.log(this.toString()))
})
// .on(dataLength, console.log)