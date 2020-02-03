function startDownload(){
    return new Promise((resolve, reject) => {
        console.log('Starting Download')
        setTimeout(() => {
            console.log('Download Completed')
            resolve()
        }, 3000)
    })
}

let downloadedFile = startDownload()
console.log(downloadedFile)

setTimeout(() => {
    downloadedFile.then(() => {
        console.log('Playing the downloaded file')
    })
}, 5000)