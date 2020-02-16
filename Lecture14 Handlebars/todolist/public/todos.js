$(() => {
    $.get('api/add', resfreshlist)
    ref
    $('#submit').click((e) => {
        e.preventDefault()
        $.post(
            '/api/add',
            {name: $('Task').val(), status: $('#completed').prop('checked')},
            (data) => {
                resfreshlist(data)
            }
            )
    })

    function resfreshlist(data){
        $('#list').empty()
        for(task of data){
            $('#list').append(
                $('<li>')
                .append($('<input type="checkbox">').attr('checked', task.status))
                .append($('<span>').text(task.name))
            )
        }
    }
})