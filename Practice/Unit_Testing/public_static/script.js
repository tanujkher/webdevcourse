$(() => {
    let km = $('#km')
    let min = $('#min')
    let calcfare = $('#calcfare')
    let fare = $('#fare')

    calcfare.click(() => {
        $.post('/calcfare', {
            km: km.val(),
            min: min.val()
        }, (data) => {
            fare.append($('<div>').text(data.fare))
        })
    })

    let getrates = $('#getrates')
    let rate = $('#rate')

    getrates.click(() => {
        $.get('/rate', (data) => {
            rate.text(JSON.stringify(data))
        })
    })
})