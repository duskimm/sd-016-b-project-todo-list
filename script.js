// Variables
const taskList = document.querySelector("#lista-tarefas");
const addButton = document.querySelector("#criar-tarefa");
const taskInput = document.querySelector('#texto-tarefa');
const removeAllButton = document.querySelector('#apaga-tudo');
const removeCompletedButton = document.querySelector('#remover-finalizados')
const saveButton = document.querySelector('#salvar-tarefas');
const removeSelectedButton = document.querySelector('#remover-selecionado')
const moveUpButton = document.querySelector('#mover-cima')
const moveDownButton = document.querySelector('#mover-baixo')
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

function removeSelected () {
  let selectedTask = document.getElementsByClassName('selected')[0];
  taskList.removeChild(selectedTask);
}
removeSelectedButton.addEventListener('click', removeSelected);

function moveTaskUp () {
  let selectedTask = document.querySelector('.selected');
  if (selectedTask == null || undefined) {
    alert ('Voce precisa selecionar uma tarefa')
  } else if (selectedTask.previousElementSibling == null || undefined) {
    alert ('Essa tarefa já é a primeira')
  } else {
    let upperTask = selectedTask.previousElementSibling;
    taskList.insertBefore(selectedTask, upperTask)
  }
}
moveUpButton.addEventListener('click', moveTaskUp);
// Lógica retirada de https://github.com/tryber/sd-015-b-project-todo-list/pull/129/files'

function moveTaskDown () {
  let selectedTask = document.querySelector('.selected');
  if( selectedTask == null || selectedTask == undefined) {
    alert ('Voce precisa selecionar uma tarefa');
  } else if (selectedTask.nextElementSibling == null || selectedTask.nextElementSibling == undefined) {
    alert ('Essa tarefa já é a ultima');
  } else {
    let lowerTask = selectedTask.nextElementSibling;
    let changeTask = lowerTask.nextElementSibling
    taskList.insertBefore(selectedTask, changeTask);
  }
}
moveDownButton.addEventListener('click', moveTaskDown);
// Lógica retirada de https://github.com/tryber/sd-015-b-project-todo-list/pull/129/files'

window.onload = function (){
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('list');
}