const express = require('express')
const srv = express()

function m0(req, res, next){
    console.log(req.url)
    if(req.url != '/1' && req.url != '/2'){
        res.send('nothing to see here')
    }else{
        next()
    }
}

function m1(req, res, next){
    console.log('In m1')
    next()
}

function m2(req, res, next){
    console.log('In m2')
    next()
}

function m3(req, res, next){
    res.send('In m3')
    next()
}

function m4(req, res){
    res.send('In m4')
}

srv.use('/1', m0, m1, m2, m3)

srv.listen(9832, () => {
    console.log('Server started at http://localhost:9832')
})