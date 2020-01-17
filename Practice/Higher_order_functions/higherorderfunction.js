function createGreeter(name){
    let firstName = name.split(" ")[0]
    function Greeter(message){
        console.log("Hello " + firstName + ". " + message)
    }
    return Greeter
}
let message = createGreeter("Tanuj Kher")
message("Do you live in Delhi?")