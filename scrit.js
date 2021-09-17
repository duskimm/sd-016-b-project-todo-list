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
}

//Requisito 07
function selectTask(event) {
    let task = event.target
    let taskList = document.querySelectorAll('.task')
    console.log(task);
    console.log(taskList);
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].innerText !== task.innerText){
            taskList[i].className = 'task'
        } else {
            taskList[i].className = 'task selected'
        }
        
    }
}   




window.onload = function(){
    setBtnAddTaskEvent()
    //setTaskSelectEvent()
}