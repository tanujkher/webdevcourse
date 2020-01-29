function Person(name, age){
    this.firstname = name.split(' ')[0]
    this.lastname = name.split(' ')[1]
    this.age = age
    this.isAdult = function(){
        return (age > 18)
    }
}

// function Person(name, age){
//     this.firstname = name.split(' ')[0]
//     this.lastname = name.split(' ')[1]
//     this.age = age
// }
// Person.prototype = function(){
//     this.isAdult = function(){
//         return (age > 18)
//     }
// }

let p = new Person('John Smith', 30)
let h = new Person('Harry Potter', 18)
console.log(p.isAdult == h.isAdult)//false in case of upper function Person but true for commented one 
console.log(h)
// console.log(p.isAdult == h.isAdult)