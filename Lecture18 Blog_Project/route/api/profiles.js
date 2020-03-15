const route = require('express').Router()

route.get('/:username', (req, res) => {
    res.send('TODO: profile page of ' + req.params.username)
})

exports = module.exports = route