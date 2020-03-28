var socket = io()
function play(instId){
    socket.emit('play', {
        id: instId
    })
}
$(() => {
    socket.on('play', (data) => {
        var instrument = $('#' + data.id)[0]
        instrument.play()
    })
})