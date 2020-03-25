const express = require('express')
const srv = express()
const fareutils = require('./fareutils')

srv.use(express.urlencoded({extended: true}))
srv.use(express.json())

srv.use('/', express.static(__dirname + '/public_static'))

srv.post('/calcfare', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    fare = fareutils.calcfare(km, min)
    
    res.send({fare: fare})
})

srv.get('/rate', (req, res) => {
    res.send(fareutils.rate)
})

exports = module.exports = srv