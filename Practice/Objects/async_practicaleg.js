function downloadFile(url, downloaded){
    console.log('Downloading file from ' + url)
    setTimeout(function(){
        let filePath = 'C:\\Downloads\\' + url.split('/').pop()
        console.log('Downloaded file path ' + filePath)
        downloaded(filePath)
    }, 3000)
}

function resizeFile(path, resized){
    console.log('We are resizing file ' + path)
    setTimeout(function(){
        let newPath = path.split('.')[0] + '-resized.' + path.split('.')[1]
        resized(newPath)
    }, 3000)
}

function uploadFile(diskPath, uploaded){
    setTimeout(function(){
        let uploadedPath = 'https://cb.lk/uploads/' + diskPath.split('\\').pop()
        console.log('We uploaded to ' + uploadedPath)
        uploaded(uploadedPath)
    }, 3000)
}

downloadFile('http://google.com/logo.png', function(downloadedPath){
    resizeFile(downloadedPath, function(resizedPath){
        uploadFile(resizedPath, function(uploadedPath){
            console.log('uploaded at ' + uploadedPath)
        })
    })
})