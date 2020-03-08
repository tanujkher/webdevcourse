const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const PORT = process.env.PORT || 2938

const app = express()
const srv = http.createServer(app)
const io = socketio(srv)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('connection created at ' + socket.id)
    socket.on('beep', () => {
        console.log('beep button clicked from ' + socket.id)
    })

    socket.on('msg_send', (data) => {
        io.emit('msg_rcvd', data)
    })
})

srv.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})