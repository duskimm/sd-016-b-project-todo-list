//Requisitos 05 e 06
function setBtnAddTaskEvent() {
    let btn = document.getElementById('criar-tarefa')
    btn.addEventListener('click', addTaskToList)
}
function addTaskToList() {
    let input = document.getElementById('texto-tarefa')
    let inputValue = input.value
    let list = document.getElementById('lista-tarefas')
    let task = document.createElement('li')
    task.innerText = inputValue
    task.className = 'task'
    list.appendChild(task)
    input.value = ''
    task.addEventListener('click', selectTask)
    task.addEventListener('dblclick', completeTask)
}

//Requisito 07
function selectTask(event) {
    let task = event.target
    let taskList = document.querySelectorAll('.task')    
/*     if (alreadySelected(task)) {
        task.classList.remove('selected')
    } else { */
        for (let j = 0; j < taskList.length; j++) {
            if (taskList[j].innerText !== task.innerText){
                taskList[j].classList.remove('selected')
            }else{
                taskList[j].classList.add('selected')           
            }        
        }   
/*     } */
         
}
function alreadySelected(task) {
    let taskSelected = document.querySelector('.selected')
    if (taskSelected == null) {
        taskSelected = []
    } else {
        if (task.innerText === taskSelected.innerText) {
            return true
        } else {
            return false
        } 
    }
    
}
    


//Requisito 09
function completeTask(event) {
    let task = event.target
    let taskList = document.querySelectorAll('.task')
    if (alreadyCompleted(task)) {
        task.classList.remove('completed')
    } else {
        for (let i = 0; i < taskList.length; i++) {
            if (task.innerText === taskList[i].innerText) {
                taskList[i].classList.add('completed')
                console.log(true);
            } else {
                console.log(false);
            }
        }
    }
    
}
function alreadyCompleted(task) {
    let taskList = document.querySelectorAll('.completed')
    for (let i = 0; i < taskList.length; i++) {
        if (task.innerText === taskList[i].innerText) {
            return true
        } else {
            return false
        }
    }
}
//Requisito 10
function setBtnClearListEvent() {
    let btn = document.getElementById('apaga-tudo')
    btn.addEventListener('click', clearList)
}
function clearList() {
    let taskList = document.querySelectorAll('.task')
    let list = document.getElementById('lista-tarefas')
    taskList.forEach(task => {
        list.removeChild(task)
    })
}
//Requisito 11
function setBtnClearCompletedTaskEvent() {
    let btn = document.getElementById('remover-finalizados')
    btn.addEventListener('click', clearCompleted)
}
function clearCompleted() {
    let taskList = document.querySelectorAll('.completed')
    let list = document.getElementById('lista-tarefas')
    taskList.forEach(task => {
        list.removeChild(task)
    })
}
//Requisito 12
function setBtnSaveListEvent() {
    let btn = document.getElementById('salvar-tarefas')
    btn.addEventListener('click', saveList)
}
function clearLocal() {
    localStorage.clear()    
}
function setLocal() {
    if(localStorage.getItem('taskText', JSON.stringify([])) === null){
        localStorage.setItem('taskText', JSON.stringify([]))
    }
    if (localStorage.getItem('taskClass') === null) {
        localStorage.setItem('taskClass', JSON.stringify([]))
    }
}
function saveList() {
    let taskList = document.querySelectorAll('.task')
    clearLocal()
    setLocal()
    let savedTaskClass = JSON.parse(localStorage.getItem('taskClass'))
    let savedTaskText = JSON.parse(localStorage.getItem('taskText'))        
    taskList.forEach(task =>{
        savedTaskClass.push(task.className)
        savedTaskText.push(task.innerText)
        localStorage.setItem('taskClass', JSON.stringify(savedTaskClass))
        localStorage.setItem('taskText', JSON.stringify(savedTaskText))
    })
}
function initialRenderization() {
    if(localStorage.getItem('taskText', JSON.stringify([])) === null){
        localStorage.setItem('taskText', JSON.stringify([]))
    }
    if (localStorage.getItem('taskClass') === null) {
        localStorage.setItem('taskClass', JSON.stringify([]))
    }else{
        let taskClassList = JSON.parse(localStorage.getItem('taskClass'))
        let taskTextList = JSON.parse(localStorage.getItem('taskText'))
        let list = document.getElementById('lista-tarefas')
        if (taskClassList.length === taskTextList.length){
            let aux = taskTextList.length - 1
            for (let i = 0; i <= aux; i++) {
                let li = document.createElement('li')
                li.innerText = taskTextList[i]
                li.className = taskClassList[i]
                list.appendChild(li)
                li.addEventListener('dblclick', completeTask)
                li.addEventListener('click', selectTask)
            }
        }
        
    }
}
//Requisitos 13
function setBtnMoverEvents() {
    let btnCima = document.getElementById('mover-cima')
    let btnBaixo = document.getElementById('mover-baixo')
    btnBaixo.addEventListener('click', moverBaixo)
    btnCima.addEventListener('click', moverCima)
}
function moverCima() {
    let taskSelected = document.querySelector('.selected')
    if(taskSelected){
        if(taskSelected.previousElementSibling){
            taskSelected.parentNode.insertBefore(taskSelected, taskSelected.previousElementSibling)
        }
    }
    
}
function moverBaixo() {
    let taskSelected = document.querySelector('.selected')
    if(taskSelected){
        if(taskSelected.nextElementSibling){
            taskSelected.parentNode.insertBefore(taskSelected.nextElementSibling, taskSelected)
        }else{
            return false
        }
    }
    
}


window.onload = function(){
    initialRenderization()
    setBtnAddTaskEvent()
    setBtnClearListEvent()
    setBtnClearCompletedTaskEvent()
    setBtnSaveListEvent()
    setBtnMoverEvents()
}