const socket = io()

window.onload = function(){
    const btnBeep = document.getElementById('beep')
    btnBeep.onclick = () => {
        socket.emit('beep')
    }
}