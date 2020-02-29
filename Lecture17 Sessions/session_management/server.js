const express = require('express')
const session = require('express-session')

const {db, User} = require('./db')

const srv = express()

srv.use(express.urlencoded({extended: true}))

srv.set('view engine', 'hbs')

srv.use(session({
    secret: 'A long unguessable string',
    resave: false,
    saveUninitialized: true
}))

srv.get('/view', (req, res) => {
    if(req.session.count){
        req.session.count++
    }else{
        req.session.count = 1
    }
    req.session.save()
    res.render('viewcounter', {count: req.session.count})
})

srv.get('/signup', (req, res) => {
    res.render('signup')
})

srv.post('/signup', async (req, res) => {
    console.log(req.body)
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
    })
    res.redirect('/login')
})

srv.get('/login', (req, res) => {
    res.render('login')
})

srv.post('/login', async (req, res) => {
    const user = await User.findOne({
        where: {
            username: req.body.username
        }
    })

    if(!user){
        res.send('Wrong username')
        return
    }

    if(user.password != req.body.password){
        res.send('Wrong password')
        return
    }
    
    req.session.username = user.username
    req.session.save()
    res.redirect('/profile')
})

srv.get('/profile', async (req, res) => {
    if(!req.session.username){
        res.redirect('/login')
        return
    }

    const user = await User.findOne({
        where: {
            username: req.session.username
        }
    })

    res.render('profile', {user})
})
db.sync().then(() => {
    srv.listen(4998, () => {
        console.log('Server started at http://localhost:4998/')
    })
})