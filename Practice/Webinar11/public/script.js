$(() => {
    let newtodo = $('#newtodo')
    let addtodo = $('#addtodo')
    let todolist = $('#todolist')

    addtodo.click(() => {
        $.post(
            '/todo',
            {task : newtodo.val()},
            (data) => {
                todolist.empty()
                for(todo of data){
                    todolist.append($('<li>').text(todo.task))
                }
            }
        )
    })
})