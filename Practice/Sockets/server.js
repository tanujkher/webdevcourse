const express = require('express')
const srv = express()
const socketio = require('socket.io')
const http = require('http')

const server = http.createServer(srv)
const io = socketio(server)

let usersockets = {}

srv.use('/', express.static(__dirname + '/frontend'))
io.on('connection', (socket) => {
    console.log('New connection formed from ' + socket.id)
    socket.emit('connected')
    let found = 0
    socket.on('send_msg', (data) => {
        if(data.msg.startsWith('@')){
            let recipient = data.msg.split(':')[0].substr(1)
            let rcptSocket = usersockets[recipient]
            io.to(rcptSocket).emit('recv_msg', data)
        }else{
            io.emit('recv_msg', data)
        }
    })
    socket.on('login', (data) => {
        usersockets[data.user] = socket.id
    })
})

server.listen(4615, () => {
    console.log('Server started at http://localhost:4615')
})