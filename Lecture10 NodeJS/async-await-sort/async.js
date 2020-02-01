const fs = require('fs').promises
const os = require('os')

async function sort(){
    try{
        let i1 = fs.readFile(__dirname + '/input_1.txt')
        let i2 = fs.readFile(__dirname + '/input_2.txt')
        let i3 = fs.readFile(__dirname + '/input_3.txt')
    
        data1 = await i1
        data2 = await i2
        data3 = await i3

        let ans = data1.toString().split(os.EOL)
        .concat(data2.toString().split(os.EOL))
        .concat(data3.toString().split(os.EOL))
        .sort((a, b) => a - b)
        .join(os.EOL)

        await fs.writeFile(__dirname + 'output.txt', ans)
    } catch(e){
        console.log(e)
    }
    console.log('sorting done')
}

sort()