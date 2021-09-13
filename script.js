// Variables
const taskList = document.querySelector("#lista-tarefas");
const addButton = document.querySelector("#criar-tarefa");
const taskInput = document.querySelector('#texto-tarefa');
const removeAllButton = document.querySelector('#apaga-tudo');
const removeCompletedButton = document.querySelector('#remover-finalizados')
const saveButton = document.querySelector('#salvar-tarefas');
// 


function newTask(){
    if (taskInput.value !== '') {
      let newTask = document.createElement('li');
      newTask.innerText = taskInput.value;
      newTask.className = 'task';
      taskList.appendChild(newTask);
      taskInput.value = '';
  } else if (taskInput.value === '') {
      alert ("Digite algo para adicionar para adicionar à Lista de Tarefas")
  }
}
addButton.addEventListener('click', newTask);

function changeBackground (event) {
  let listItems = document.querySelectorAll('li');
  for (let i = 0; i < listItems.length; i += 1) {
    listItems[i].style.backgroundColor = '';
    listItems[i].classList.remove('selected')
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
  event.target.classList.add('selected')
}
taskList.addEventListener('click', changeBackground);

function changeTextDecoration (event) {
  if(event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = 'none'
  } else {
    event.target.style.textDecoration = 'line-through'
  }
}
taskList.addEventListener ('dblclick', changeTextDecoration);

function changeCompletedClass (event) {
  if (event.target.style.textDecoration === 'line-through') {
    event.target.classList.add('completed')
  } else if (event.target.style.textDecoration === 'none') {
    event.target.classList.remove('completed')
  }
}
taskList.addEventListener('dblclick', changeCompletedClass);

function removeAllTasks () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}
removeAllButton.addEventListener('click', removeAllTasks);
// Lógica encontrada em https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/

function removeCompletedTasks () {
  let completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i+=1) {
    taskList.removeChild(completedTasks[i]);
  }
}
removeCompletedButton.addEventListener('click', removeCompletedTasks);

function saveTasks () {
  saveButton.addEventListener('click', function(){
    let savedItems = taskList.innerHTML;
    localStorage.setItem ('list', savedItems);
  })
}

saveTasks();

window.onload = function (){
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('list');
}