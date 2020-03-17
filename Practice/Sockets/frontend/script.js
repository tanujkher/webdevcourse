const socket = io()
socket.on('connected', () => {
    console.log('Connected to ' + socket.id)
}) 
$(() => {
    let msgbox = $('#msgbox')
    let sendmsg = $('#sendmsg')
    let msglist = $('#msglist')
    
    sendmsg.click(() => {
        let msg = msgbox.val()
        msgbox.val('')
        socket.emit('send_msg', {msg: msg})
    })

    socket.on('recv_msg', (data) => {
        msglist.append($('<li>').text(data.msg))
    })
})