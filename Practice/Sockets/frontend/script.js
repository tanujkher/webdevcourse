const socket = io()
socket.on('connected', () => {
    console.log('Connected to ' + socket.id)
}) 
$(() => {
    let user = ''

    let msgbox = $('#msgbox')
    let sendmsg = $('#sendmsg')
    let msglist = $('#msglist')

    let logindiv = $('#login-div')
    let chatdiv = $('#chat-div')
    let loginbtn = $('#loginbtn')
    let curruser = $('#curruser')

    loginbtn.click(() => {
        console.log('hi')
        let loginbox = $('#loginbox').val()
        user = loginbox 
        curruser.append($('<li>').text(loginbox))
        socket.emit('login', {
            user: user      
        })
        chatdiv.show()
        logindiv.hide()
    })
    
    sendmsg.click(() => {
        let msg = msgbox.val()
        msgbox.val('')
        socket.emit('send_msg', {
            user: user,
            msg: msg
        })
    })

    socket.on('recv_msg', (data) => {
        msglist.append($('<li>').text(data.user + ' :  ' + data.msg))
    })
})