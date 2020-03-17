window.onload = function() {
    const socket = io()
    socket.on('connected', () => {
        console.log('Connected to ' + socket.id)
    }) 
}
