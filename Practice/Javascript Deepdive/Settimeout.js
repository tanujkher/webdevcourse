var intervalId
var runCount = 1
function sayHello(){
    runCount++
    if(runCount > 5){
        clearInterval(intervalId)
    }
    console.log('Hello')
}
// setTimeout(sayHello, 1000);
intervalId = setInterval(sayHello, 1000);
console.log('And the Wait Starts ...')

let Count = 1
let ii = setInterval(function(){
    Count++
    if(Count > 5){
        clearInterval(ii)
    }
    console.log('Print after 1 sec')
}, 1000);