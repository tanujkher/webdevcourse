const route = require('express').Router()
const { Users } = require('../data/db')

const passport = require('../passport')

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
route.post('/login', passport.authenticate('local', {
    successRedirect: '/private',
    failureRedirect: '/login'
}))
route.post('/signup', async (req, res) => {
    const user = await Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    })
    if(user){
        res.redirect('/login')
    }
})

exports = module.exports = route