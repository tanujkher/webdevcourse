function fakeDownload(done){
    setTimeout(function(){
       var downloadedData = 'We downloaded some data from web'
       done(downloadedData) 
    }, 1000);
}
fakeDownload(function(data){
    console.log('The data downloaded was -->')
    console.log(data)
})
//equivalent promise
function fDownload(correct){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            var dd = 'Some data from web'
            console.log('Download Completed')
            if(correct){
                resolve(dd)
            }
            else{
                reject(new Error('Failed to download'))
            }
        }, 1000);
    })
}
// fDownload(true).then(function(data){
//     console.log('The data downloaded was -->')
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })
// fDownload(false).then(function(data){
//     console.log('The data downloaded was -->')
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })
setTimeout(function(){
    fDownload(true).then(function(data){
        console.log('The data downloaded was -->')
        console.log(data)
    })
}, 3000);