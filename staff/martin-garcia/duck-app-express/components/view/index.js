//const Header = require('../header')
const Footer = require('./../footer')

module.exports = function({ body, header }) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <script src="https://kit.fontawesome.com/12f9d6a4c1.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/index.css" >
        <title>Duck-App</title>
    </head>
    
    <body>
        ${header}
        ${body}
        ${Footer()}
    </body>
    </html>`
}