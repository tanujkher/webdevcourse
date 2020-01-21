function ceo(){
    console.log('make a product')
    cto()
}
function cto(){
    console.log('make a test specific product')
    vpengg()
}
function vpengg(){
    console.log('let me head the team')
    techlead()
}
function techlead(){
    console.log('sharing the idea and control team work')
    developer()
}
function developer(){
    console.log('let me do the actual work')
    throw new Exception('Developer on Holiday')
}
ceo()
//in the reference error see the call stack