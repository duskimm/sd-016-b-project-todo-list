//Requisito 5
let newTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');
let createNewTask = document.getElementById('criar-tarefa');
let taskToSelect = document.querySelector('li');
let buttonDeleteAll = document.getElementById('apaga-tudo')

function addNewTask() {
  const taskListItem = document.createElement('li');
  taskList.appendChild(taskListItem);
  taskListItem.innerText = newTask.value;
  newTask.value = '';
}
createNewTask.addEventListener('click', addNewTask);

//Requisito 5 feito graças ao link 
//https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-javascript
 
//Requisito 6
function markTask() {
  taskToSelect.style.backgroundColor  = "rgb(128, 128, 128)";
}

taskList.addEventListener('click',markTask);

function deleteAll() {
  taskList.innerHTML = ""     
}

buttonDeleteAll.addEventListener('click',deleteAll);