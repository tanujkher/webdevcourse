const socket = io()

window.onload = function(){
    const btnBeep = $('#beep')
    const btnSend = $('#send')
    const textbox = $('#textbox')
    btnBeep.click(() => {
        socket.emit('beep')
    })
    btnSend.click(() => {
        const msg = $('#msgbox').val()
        console.log(msg)
        if(msg){
            socket.emit('msg_send', {msg: msg})
            $('#msgbox').val('')
        }
    })
    socket.on('msg_rcvd', (data) => {
        console.log('Received')
        textbox.append($('<div>').text(data.msg))
    })
}