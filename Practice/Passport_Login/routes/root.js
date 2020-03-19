const route = require('express').Router()
const { Users } = require('../data/db')

route.get('/login', (req, res) => {
    res.render('login')
})
route.get('/signup', (req, res) => {
    res.render('signup')
})
route.post('/login', async (req, res) => {
    const user = await Users.findOne({
        where:{
            username: req.body.username
        }
    })
    if(user){
        if(user.password == req.body.password){
            return res.send('Hello' + JSON.stringify(user))
        }else{
            return res.send('Invalid Password')
        }
    }else{
        return res.send('Invalid Username')
    }
})
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