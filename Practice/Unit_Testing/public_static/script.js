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
            let prettyRateData = `
            Fixed Fare: Rs. ${data.fixed} <br>
            Min Km: ${data.minKm} km <br>
            Per Km: Rs. ${data.perKm} <br>
            Free Minutes: ${data.freeMin} min <br>
            Per Minute Fare: Rs. ${data.perMin} 
            `
            rate.html(prettyRateData)
        })
    })
})