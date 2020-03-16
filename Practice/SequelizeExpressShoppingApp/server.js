// Todo resolve the alet issue in add_products.js and add a cart to store data of items added to cart by user
const express = require('express')
const srv = express();

const path = require('path')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/', express.static(path.join(__dirname, 'public')))

srv.use('/api', require('./routes/api'))

srv.listen(2690, () => {
    console.log('Server started at http://localhost:2690')
})