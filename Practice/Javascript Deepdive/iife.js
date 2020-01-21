// Immediately Invoked Function Expression
function sayHello(){
    console.log('hello')
}
sayHello();//normal way to call a function

(function wish(){
    console.log('good morning')
})()
//IIFE
//Benefits of iife
//block scope without disturbing global variables
var val = 10;
(function blockfunc() {
    var val = 20
    val++
    console.log(val)//21
})()
console.log(val)//10
//Settimeout Problem
for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
}
//Solution 1
for(let i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(i)
    }, 100)
}
//Solution 2 using iife
for(var i = 0; i < 10; i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        }, 100)
    })(i)
}
//Minification
(function(l, m, n, o){
    l('3^4 = ' + m(3, 4))
    l('4^3 = ' + m(4, 3))
    l('root(2) = ' + o(2))
    l('sin(10) = ' + n(10))
})(console.log, Math.pow, Math.sin, Math.sqrt)