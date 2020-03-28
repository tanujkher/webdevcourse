const express = require('express')
const srv = express()
const http = require('http')
const socket = require('socket.io')

const SERVER_PORT = 8728 || process.env.PORT

const server = http.createServer(srv)

const io = socket(server)

srv.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    socket.on('play', (data) => {
        io.emit('play', data)
    })
})

server.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`)
})