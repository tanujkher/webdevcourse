//example
function count(){
    var a = 10
    function increment(){
        console.log(++a)
    }
    return increment
}

var c = count()
c()//11
c()//12
//a isn't removed but still in closure scope of increment 
//function inside counter which contains value of a intact
//Practical Usage (Custom Counters)
function counter(initVal, delta){
    let val = initVal
    return{
        up(){
            val = val + delta
            console.log(val)
        },
        down(){
            val = val - delta
            console.log(val)
        }
    }
}  
let counter1 = counter(10, 2)
console.log(' ')
counter1.up()
counter1.up()
counter1.down()
counter1.up()
counter1.up()