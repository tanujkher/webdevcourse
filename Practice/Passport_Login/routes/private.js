const route = require('express').Router()

route.get('/', (req, res) => {
    if(req.user){
        return res.send('Visible to none')
    }else{
        return res.redirect('/login')
    }
})

exports = module.exports = route