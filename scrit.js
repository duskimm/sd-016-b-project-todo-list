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
    if (alreadySelected(task)) {
        task.classList.remove('selected')
    } else {
        for (let j = 0; j < taskList.length; j++) {
            if (taskList[j].innerText !== task.innerText){
                taskList[j].classList.remove('selected')
            }else{
                taskList[j].classList.add('selected')           
            }        
        }   
    }
         
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
   


window.onload = function(){
    setBtnAddTaskEvent()
    //setTaskSelectEvent()
}