const route = require('express').Router()

route.get('/', (req, res) => {
    res.send('Visible to none')
})

exports = module.exports = route