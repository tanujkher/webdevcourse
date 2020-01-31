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

            //Delete Button

            let Xbtn = document.createElement('button')
            Xbtn.onclick = function(event){
                event.target.parentElement.remove()
                let del = event.target.parentElement.innerText
                del = del.substring(3)
                for(let i = 0; i < tasklist.length; i++){
                    if(tasklist[i] == del){
                        tasklist.splice(i, 1)
                    }
                }
                localStorage.tasks = tasklist.join(',')
            }
            Xbtn.innerText = 'X'
            item.appendChild(Xbtn)

            //Up Button

            let upbtn = document.createElement('button')
            upbtn.innerText = '^'
            upbtn.onclick = function(event){
                event.target.parentElement.parentElement.insertBefore(
                    event.target.parentElement,
                    event.target.parentElement.previousElementSibling
                    )
                let up = event.target.parentElement.innerText
                up = up.substring(3)
                let s1 = 0;
                for(let i = 0; i < tasklist.length; i++){
                    if(tasklist[i] == up){
                        s1 = i
                    }
                }
                if(s1 == 0){
                    let temp = tasklist[0]
                    for(let i = 0; i < tasklist.length - 1; i++){
                        tasklist[i] = tasklist[i + 1]
                    }
                    tasklist[tasklist.length - 1] = temp
                }else{
                    let temp = tasklist[s1]
                    tasklist[s1] = tasklist[s1 - 1]
                    tasklist[s1 - 1] = temp
                }
                localStorage.tasks = tasklist.join(',')
            }
            item.appendChild(upbtn)

            //Down Button

            let downbtn = document.createElement('button')
            downbtn.innerText = 'V'
            downbtn.onclick = function(event){
                event.target.parentElement.parentElement.insertBefore(
                    event.target.parentElement.nextElementSibling,
                    event.target.parentElement
                )
                let down = event.target.parentElement.innerText
                down = down.substring(3)
                let s1 = 0
                for(let i = 0; i < tasklist.length; i++){
                    if(tasklist[i] == down){
                        s1 = i
                    }
                }
                let temp = tasklist[s1]
                tasklist[s1] = tasklist[s1 + 1]
                tasklist[s1 + 1] = temp
                localStorage.tasks = tasklist.join(',')
            }
            item.appendChild(downbtn)
            item.appendChild(span)
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