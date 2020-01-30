$(() => {
    let btn = $('#btn')
    let list = $('#list')
    let page = 1
    btn.click(() => {
        $.get('https://reqres.in/api/users?page=' + page, (data) => {
            page++
            for(let p of data.data){
                list.append($('<li>').append($('<img>').attr('src', p.avatar)).append(p.first_name + p.last_name))
            }
        })
    })
})