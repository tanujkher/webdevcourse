const express = require('express')

const server = express()
server.get('/', function(req, res, next){
    res.send("Hello World")
})

server.get('/greet/:tod', function(req, res, next){
    let name = req.query.name
    let tod = 'Morning'
    switch(req.params.tod){
        case 'evening' : tod = 'Evening'; break;
        case 'afternoon' : tod = 'Afternoon'; break;
        case 'night' : tod = 'Night'; break;
        default : tod = 'Morning';
    }
    let greeting = `Good ${tod} , ${name}`
    res.send(greeting)
})

server.get('/html', function(req, res, next){
    res.send(`
    <html>
        <body>
            <h1>This is a heading</h1>
            <i>Sent a HTML page through server</i>
        </body>
    </html>
    `)
})

server.listen(2121)