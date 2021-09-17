//Requisito 05
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
    list.appendChild(task)
    input.value = ''
}





window.onload = function(){
    setBtnAddTaskEvent()
}