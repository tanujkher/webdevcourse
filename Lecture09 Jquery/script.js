$(() => {
    let newtask = $('#newtask')
    let tasklist = $('#tasklist')

    $('#addtask').click(() => {
        tasklist.append($('<li>').text(newtask.val()))
        newtask.val('')
    })
    newtask.keyup(() => {
        if(event.keyCode == 13){
            tasklist.append($('<li>').text(newtask.val()))
            newtask.val('')
        }
    })
})