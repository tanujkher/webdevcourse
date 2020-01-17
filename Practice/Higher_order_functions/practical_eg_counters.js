function counter(initVal, delta){
    let val = initVal;
    function incrementer(){
        val = val + delta
        return val
    }
    return incrementer
}
let fiveCounter = counter(5, 5)
let anotherCounter = counter(4, 4)
console.log(fiveCounter())
console.log(fiveCounter())
console.log("* " + anotherCounter())
console.log(fiveCounter())
console.log(fiveCounter())
console.log("* " + anotherCounter())
console.log("* " + anotherCounter())
console.log(fiveCounter())