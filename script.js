//Requisito 5
let newTask = document.getElementById('texto-tarefa');
let taskList = document.getElementById('lista-tarefas');
let createNewTask = document.getElementById('criar-tarefa');
let buttonDeleteAll = document.getElementById('apaga-tudo');


function addNewTask() {
  const taskListItem = document.createElement('li');
  taskList.appendChild(taskListItem);
  taskListItem.innerText = newTask.value;
  newTask.value = '';
}

createNewTask.addEventListener('click', addNewTask);

//Requisito 5 feito graças aos links
//https://stackoverflow.com/questions/17433557/how-to-save-user-input-into-a-variable-in-html-and-javascript
//https://www.w3schools.com/howto/howto_js_add_class.asp

//Requisito 10
function deleteAll() {
  taskList.innerHTML = ""
}

buttonDeleteAll.addEventListener('click',deleteAll);
 
//Requisito 7
function selectTaskToColor(event) {
  const taskToSelect = document.querySelector('.beautiful-color');
  if (taskToSelect === null) {
    event.target.classList.add("beautiful-color");
  } else {
    taskToSelect.classList.remove('beautiful-color');
    event.target.classList.add('beautiful-color');
  }
}
taskList.addEventListener('click',selectTaskToColor);

//Requisito 11