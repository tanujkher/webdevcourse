window.onload = function(){
    function runloop(n, afterLoop){
        for (let i = 0; i < n; i++) {
            console.log('Iteration number ' + i)
        }
        if(typeof afterLoop === 'function'){
            afterLoop()
        }
    }
    runloop(5 , function(){
        console.log('Loop ended')
    })
    runloop(5, 200)
}