window.onload  = function(){
    makeGreeter = function(greeter){
        createGreeter = function(name){
            greet = function(){
                console.log(greeter + ' ' + name)
            }
            return greet
        }
        return createGreeter
    }
    helloGreeter = makeGreeter('Hello')
    welcomeGreeter = makeGreeter('Welcome')
    greet1 = helloGreeter('John')
    greet2 = helloGreeter('Jane')
    greet3 = welcomeGreeter('John')
    greet4 = welcomeGreeter('Jane')
    greet1()
    greet2()
    greet3()
    greet4()
}