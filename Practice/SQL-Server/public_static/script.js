$(() => {
    function refresh(){
        $.get('/api')
        .then((data) => {
            console.log(data)
            for(let p of data.persons){
                person.append(
                    $('<tr>')
                    .append($('<td>').text(p.name))
                    .append($('<td>').text(p.age))
                    .append($('<td>').text(p.city))
                    )          
                }
            })
        }
        
        let submit = $('#btnSubmit')
        
        let person = $('#persons')
        
        refresh()
        
        submit.click(() => {
            let name = $('#name').val()
            let age = $('#age').val()
            let city = $('#city').val()
            let np = {
                name: name,
                age: age,
                city: city
            }
            $.post('/api', {np: np})
            .then(refresh)
        })
        
    })