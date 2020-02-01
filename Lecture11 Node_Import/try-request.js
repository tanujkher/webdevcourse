const request = require('request')
const fs = require('fs')

request({
    url : 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    encoding : null
}, (err, response, body) => {
    if(err){
        console.error(err)
        return
    }
    fs.writeFile('googlelogo.png', body, (err) => {
        if(err){
            console.error(err)
            return
        }
        console.log('File Saved')
    })
})
