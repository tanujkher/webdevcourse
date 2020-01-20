let tasklist = []
window.onload = function () {
    let name = document.getElementById('name')
    let btn = document.getElementById('btn')
    let list = document.getElementById('list')
    function refresh(){
        list.innerHTML = ''
        for(let task of tasklist){
            let li = document.createElement('li')
            li.innerText = task
            list.appendChild(li)
        }
    }
    function addnewtask(){
        tasklist.push(name.value);
        refresh()
        localStorage.tasks = tasklist.join(',')
    }
    if(localStorage.tasks){
        tasklist = localStorage.tasks.split(',')
    }
    refresh()
    btn.onclick = function () {
        addnewtask()
    }
    name.addEventListener('keyup',function(event){
        if (event.keyCode == 13) {
            addnewtask()
        }
    })
}