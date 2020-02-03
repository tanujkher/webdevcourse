const fs = require('fs').promises
const os = require('os')

async function occurrence(){
    let content = fs.readFile(__dirname + '/file.txt')
    let contentarr = await content.then()
    let arr = contentarr.toString().split(os.EOL)
    let narr = [] 
    let count = []
    for(let i = 0; i <= arr.length - 1; i++){
        if(narr.includes(arr[i])){
            let index = narr.indexOf(arr[i])
            count[index] = count[index] + 1
        }else{
            narr.push(arr[i])
            count.push(1)
        }
    }
    let ncontent = ""
    for(let i = 0; i <= narr.length - 1; i++){
        ncontent = ncontent + narr[i] + ' : ' + count[i] + os.EOL
    }
    fs.writeFile(__dirname + '/output.txt', ncontent)
    .then(() => {
        console.log('Task Done')
    })
    .catch((err) => {
        console.error(err)
    })
}

occurrence()