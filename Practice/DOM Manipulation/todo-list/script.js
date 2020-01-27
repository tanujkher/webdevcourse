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
            Xbtn.onclick = function(event){
                event.target.parentElement.remove()
                let del = event.target.parentElement.innerText
                del = del.substring(0, del.length - 1)
                for(let i = 0; i < tasklist.length; i++){
                    if(tasklist[i] == del){
                        tasklist.splice(i, 1)
                    }
                }
                localStorage.tasks = tasklist.join(',')
            }
            Xbtn.innerText = 'X'
            item.appendChild(span)
            item.appendChild(Xbtn)
            list.appendChild(item)
        }
    }

    btn.onclick = function(){
        tasklist.push(task.value)
        localStorage.tasks = tasklist.join(',')
        refresh()
        task.value = ''
    }

    task.addEventListener('keyup', (event) => {
        if(event.keyCode == 13){
            tasklist.push(task.value)
            localStorage.tasks = tasklist.join(',')
            refresh()
            task.value = ''
        }
    })

    if(localStorage.tasks != ''){
        refresh()
    }

}