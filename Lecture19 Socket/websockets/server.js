const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const srv = http.createServer(app)
const io = socketio(srv)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('connection created at ' + socket.id)
    socket.on('beep', () => {
        console.log('beep button clicked from ' + socket.id)
    })
})

srv.listen(2938, () => {
    console.log('Server started at http://localhost:2938')
})