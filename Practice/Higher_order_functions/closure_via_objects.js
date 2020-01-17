function counter(initVal, delta){
    let val = initVal
    let a = {
        incr : function(){
            val += delta;
        },
        decr : function(){
            val -= delta;
        },
        show : function(){
            console.log(val)
        }
    }
    return a
}
let count = counter(10, 5)
count.show()
console.log(typeof count)
console.log(typeof count.show)
console.log(typeof count.show())