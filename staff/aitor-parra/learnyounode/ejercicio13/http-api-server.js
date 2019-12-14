const http = require('http')
const url = require('url')


const { argv: [, , port = 8080] } = process

const server = http.createServer((req, res) => {

    const { method, url } = req

    if (method === 'GET') {
        const [ path, qs ] = url.split('?')

        if (path === '/api/parsetime') {
            if (qs.startsWith('iso=')) {
                const [, iso] = qs.split('=')

                const date = new Date(iso)

                const hour = date.getHours()
                const minute = date.getMinutes()
                const second = date.getSeconds()

                const json = JSON.stringify({ hour, minute, second })

                res.writeHead(200, { 'Content-Type': 'application/json' })

                res.end(json)
            } else res.end('Sorry, an ISO date should be provided.')
        } else if (path === '/api/unixtime') {
            if (qs.startsWith('iso=')) {
                const [, iso] = qs.split('=')

                const date = new Date(iso)

                const json = JSON.stringify({ unixtime: date.getTime() })

                res.writeHead(200, { 'Content-Type': 'application/json' })

                res.end(json)
            } else res.end('Sorry, an ISO date should be provided.')
        } else res.end('This endpont does not exist.')

    } else res.end('Only GET method accepted.')

})

server.listen(port)


/* 
'use strict'
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2])) 
*/