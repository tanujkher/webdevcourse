function download(url, Downloaded){
    console.log('Downloading from ' + url)
    if(!url.startsWith('http')){
        return Downloaded(new Error('Not a valid url'))
    }
    setTimeout(() => {
        let address = url.split('/').pop()
        console.log('Downloaded ' + address)
        Downloaded(null, address)
    }, 3000)
}

function compress(filePath, format, Compressed){
    console.log('Compressing ' + filePath)
    if(['gzip', 'zip', '7z'].indexOf(format) == -1){
        return Compressed(new Error('Not a valid format'))
    }
    setTimeout(() => {
        let cPath = filePath.split('.')[0] + '.' + format
        console.log('Compressed ' + cPath)
        Compressed(null, cPath)
    }, 3000)
}

function upload(server, file, Uploaded){
    console.log('Uploading ' + file + ' to ' + server)
    if(!server.startsWith('ftp://')){
        return Uploaded(new Error('We can upload to servers with only ftp'))
    }
    setTimeout(() => {
        let uPath = server + '/' + file
        console.log('Uploading to ' + uPath)
        Uploaded(null, uPath)
    }, 3000)
}

download('http://www.somefile.com/image.png', (err, Dpath) => {
    if(err) throw err
    compress(Dpath, 'zip', (err, ComPath) => {
        if(err){
            console.warn(err)
            ComPath = Dpath
        }
        upload('ftp://www.google.com', ComPath, (err, Destination) =>{
            if(err) throw err
            console.log('Uploaded to ' + Destination)
        })
    })
})