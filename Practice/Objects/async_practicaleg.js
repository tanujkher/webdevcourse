setTimeout(function(){
    let filePath = 'C\\Windows\\xyz.txt'
    console.log('File downloaded to path : ' + filePath)
    downloaded(filePath)
}, 3000)

function downloaded(path){
    console.log('Action to perform on : ' + path + 'Resize \n')
    resize(path, function(path){
        console.log('File resized at : ' + path)
    })
}
console.log('Downloading file \n')

function resize(fileName, location){
    setTimeout(function(){
        console.log('Resizing file ...\n')
        let filePath = fileName.split('.')[0] + '-resized.' + fileName.split('.')[1] 
        setTimeout(function(){
            console.log('New path is : ' + filePath)
        }, 1000)
        location(filePath)
    }, 2000)
}