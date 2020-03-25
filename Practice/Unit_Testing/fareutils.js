let rate = {
    fixed: 50,
    minKm: 5,
    perKm: 10,
    freeMin: 15,
    perMin: 2
}

function calcfare(km, min){
    let fare = rate.fixed
    fare = fare + (km > rate.minKm ? rate.perKm * (km - rate.minKm) : 0)
    fare = fare + (min > rate.freeMin ? rate.perMin * (min - rate.freeMin) : 0)
    return fare
}

exports = module.exports = {
    calcfare, rate
}