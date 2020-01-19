function printThis(){
    console.log(this)
}
printThis()
function x(){
    return 10
}
let obj = {
    a: 10,
    b: 'abc',
    c: printThis,
    d: x,
    e: function(){
        printThis()
    }
}
