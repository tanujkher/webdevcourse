const express = require('express')
const srv = express()
const socketio = require('socket.io')
const http = require('http')

const server = http.createServer(srv)
const io = socketio(server)

srv.use('/', express.static(__dirname + '/frontend'))
io.on('connection', (socket) => {
    console.log('New connection formed from ' + socket.id)
    socket.emit('connected')
    socket.on('send_msg', (data) => {
        io.emit('recv_msg', data)
    })
})

server.listen(4615, () => {
    console.log('Server started at http://localhost:4615')
})