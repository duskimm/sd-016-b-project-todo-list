let newTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');
let createNewTask = document.getElementById('criar-tarefa');

function addNewTask () {
  let taskListItem = document.createElement('li');
  taskList.appendChild(taskListItem);
  taskListItem.innerText = newTask.value;
  newTask.value = ''
}

createNewTask.addEventListener('click', addNewTask);