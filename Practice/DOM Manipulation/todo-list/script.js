let tasklist = []
window.onload = function(){
    let task = document.getElementById('task')
    let btn = document.getElementById('btn')
    let list = document.getElementById('list')
    
    function refresh(){
        list.innerHTML = ''
        tasklist = localStorage.tasks.split(',')
        for(let i = 0; i <= tasklist.length - 1; i++){
            let item = document.createElement('li')
            let span = document.createElement('span')
            span.innerText = tasklist[i]
            let Xbtn = document.createElement('button')
            Xbtn.innerText = 'X'
            Xbtn.onclick = function(event){
                for(let i = 0; i <= tasklist.length - 1; i++){
                    if(tasklist[i] == event.target.parentElement.span.innerText){
                        tasklist[i].remove()
                    }
                }
                localStorage.tasks = tasklist.join(',')
                event.target.parentElement.remove()
            }
            item.appendChild(span)
            item.appendChild(Xbtn)
            list.appendChild(item)
        }
    }

    btn.onclick = function(){
        tasklist.push(task.value)
        localStorage.tasks = tasklist.join(',')
        refresh()
    }

    refresh()

}