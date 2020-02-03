const express = require('express')

const server = express()
server.get('/', function(req, res, next){
    res.send("Hello World")
})

server.get('/greet/:name/:tod', function(req, res, next){
    let name = req.params.name
    let tod = 'Morning'
    switch(req.params.tod){
        case 'Evening' : tod = 'Evening'; break;
        case 'Afternoon' : tod = 'Afternoon'; break;
        case 'Night' : tod = 'Night'; break;
        default : tod = 'Morning';
    }
    let greeting = 'Good ' + tod + " , " + name
    res.send(greeting)
})

server.listen(2121)