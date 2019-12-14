// 'use strict'
// const http = require('http')
// var info =["","",""]
// var count = 0

// function paintResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(info[i])
//   }
// }

// function work(index){
//       http.get(process.argv[index+2], result => {
//           result.setEncoding('utf8')
//           result.on('data', data =>{
//               info[index-2] += data
//               count++
//           })
//           result.on('error', console.error)
//           result.on('end', () =>{
//             if (count === 3) {
//               printResults()
//             }
//           })
//       })
//   }


// for (let i = 0; i < 3; i++) {
//   work(i)
// }



// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }


 /* ex buggy one */
debugger
const http = require('http')
counter = 0
var info =["","",""]
for (let i=2;i<process.argv.length;i++){
    http.get(process.argv[i], result => {
        result.setEncoding('utf8')
        result.on('data', data =>{
            info[i-2] += data
        })
        result.on('error', console.error)
        result.on('end', () =>{
            ++counter === process.argv.length-2 && info.forEach(output => console.log(output))
        })
    })
}

