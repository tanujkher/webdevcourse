const express = require('express')
const srv = express()

srv.use(express.urlencoded({extended: true}))
srv.use(express.json())

srv.use('/', express.static(__dirname + '/public_static'))

srv.post('/calcfare', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = 50
    fare = fare + (km > 5 ? 10 * (km - 5) : 0)
    fare = fare + (min > 15 ? 2 * (min - 15) : 0)
    res.send({fare: fare})
})

srv.listen(7685, () => {
    console.log('Server started at http://localhost:7685')
})