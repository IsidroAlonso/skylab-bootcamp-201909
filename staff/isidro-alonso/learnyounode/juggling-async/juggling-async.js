const http = require('http')

// manu hace un foreach de cada url 

http.get(process.argv[2], (response) => {
    // let data = process.argv[2].toString()
    // response.on(data, console.log)
    // response = process.argv[2].toString()
    console.log('data')
})
// console.log(process.argv[2])
// http.get(process.argv[3], (response) => {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
// })
// http.get(process.argv[4], (response) => {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
// })