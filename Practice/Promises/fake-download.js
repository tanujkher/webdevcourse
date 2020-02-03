function Download(url){
    return new Promise((resolve, reject) => {
        if(!url.startsWith('http')){
            reject(new Error('Url doesn\'t start with http'))
        }else{
            console.log('Downloading ' + url)
            setTimeout(() => {
                let fileName = url.split('/').pop();
                resolve(fileName)
            }, 3000)
        }
    })
}

function Resize(fileName){
    return new Promise((resolve, reject) => {
        if(!fileName.endsWith('.png')){
            reject(new Error('File isn\'t png'))
        }else{
            console.log('Resizing ' + fileName)
            setTimeout(() => {
                let resizedFile = fileName.split('.')[0] + '-resized.png';
                resolve(resizedFile)
            }, 3000)
        }
    })
}

function Upload(resizedFile){
    return new Promise((resolve, reject) => {
        console.log('Uploading ' + resizedFile)
        setTimeout(() => {
            resolve('http://www.imgur.com/' + resizedFile)
        }, 3000)
    })
}

// Download('http://www.google.com/logo.png')
//     .then(Resize)
//     .then(Upload)
//     .then((resizedFile) => {
//         console.log('Uploaded to ' + resizedFile)
//     })
//     .catch((err) => {
//         console.error(err)
//     })

Promise.all([Download('http://www.google.com/logo.png'), 
             Download('http://www.google.com/image.png'),
             Download('http://www.google.com/banner.png')])
             .then((values) => {
                 return Promise.all(values.map(Resize))
             })
             .then((uploadValues) => {
                 return Promise.all(uploadValues.map(Upload))
             })
             .then((uploadLink) => {
                 for(let val of uploadLink){
                     console.log('Uploaded to ' + val)
                 }
             })
             .catch((err) => {
                 console.error(err)
             })