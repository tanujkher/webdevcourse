function print(){
    console.log('print\'s this ' + this)
    return (this.a + this.b + ' from print')
}
let obj = {
    a : 10,
    b : 'asd',
    c : function(){
        console.log('c\'s this ' + this)
        return (this.a + this.b)
    },
    d : print()
}
console.log(obj.c())
console.log(obj.d)