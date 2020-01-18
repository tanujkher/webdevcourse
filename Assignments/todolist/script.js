window.onload = function(){
    let text = document.getElementById('text')
    let list = document.getElementById('list')
    let btn = document.getElementById('btn')

    function addTask(){
        let task = text.value
        if(task != ''){
            let li = document.createElement('li')
            li.innerText += task
            let btnup = document.createElement('button')
            btnup.innerText = '+'
            let btndown = document.createElement('button')
            btndown.innerText = '-'
            let btnstrike = document.createElement('button')
            btnstrike.innerText = 'x'
            li.appendChild(btnup)
            li.appendChild(btndown)
            li.appendChild(btnstrike)
            list.appendChild(li)
            document.getElementById('text').value = ''
            btnstrike.onclick = function(){
                var li = this.parentElement
                li.className = 'done'
            }
        }
    }

    let clearBtn = document.getElementById('clearBtn')
    clearBtn.onclick = function(){
        let plist = document.getElementsByTagName('li')
        let arr = []
        let j = 0
        for (let i = 0; i < plist.length; i++) {
            if(plist[i].className === 'done'){
                arr[j] = i
                j++
            }
        }
        for(let i = arr.length - 1; i >= 0; i--){
            list.removeChild(plist[arr[i]])
        }
        console.log(arr)
    }

    btn.onclick = function(){
        addTask()
    }
    text.addEventListener('keyup', function(event){
        if(event.keyCode == 13){
            addTask()
        }
    })
}