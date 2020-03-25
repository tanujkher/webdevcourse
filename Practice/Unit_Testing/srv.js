const srv = require('./server')

srv.listen(7685, () => {
    console.log('Server started at http://localhost:7685')
})