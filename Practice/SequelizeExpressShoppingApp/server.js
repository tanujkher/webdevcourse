const express = require('express')
const srv = express();

srv.listen(2690, () => {
    console.log('Server started at http://localhost:2690')
})