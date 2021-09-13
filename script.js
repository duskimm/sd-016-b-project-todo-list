let taskButton = document.getElementById('criar-tarefa');
let inputTask = document.getElementById('texto-tarefa');

// Função que adiciona uma nova tarefa à lista
function addNewTask() {
  let newListItem = document.createElement('li');
  newListItem.className = 'list-item';
  newListItem.innerHTML = inputTask.value;
  document.getElementById('lista-tarefas').appendChild(newListItem);

  inputTask.value = '';
}

taskButton.addEventListener('click', addNewTask);

// Função que seleciona a tarefa
function selectListItem(event) {
  let listItens = document.getElementsByClassName('list-item');
  
  if (event.target.classList.contains('list-item')) {
      for (let index = 0; index < listItens.length; index += 1) {
        listItens[index].classList.remove('selected');
      }
    event.target.classList.add('selected');
  }
}

document.addEventListener('click', selectListItem);

// Função que marca a tarefa como completa

function completedTask(event) {
  let listItens = document.getElementsByClassName('list-item');

  if (event.target.classList.contains('list-item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
}

document.addEventListener('dblclick', completedTask);

// Função que apaga todas as tarefas
function deleteAllTasks() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

let deleteButton = document.getElementById('apaga-tudo');

deleteButton.addEventListener('click', deleteAllTasks);

// Função que apaga tarefas finalizadas
function deleteCompletedTasks() {
  let elements = document.getElementsByClassName('completed');

  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0])
  }

  // Créditos: Veikko Karsikko no Stack Overflow (https://stackoverflow.com/questions/4777077/removing-elements-by-class-name/14066534#14066534?newreg=a0387cf778c645cca68cdc5b3b37c0de)
}

document.getElementById('remover-finalizados').addEventListener('click', deleteCompletedTasks);

// Adicionando tarefas ao local storage

function addTasksToLocalStorage() {
  localStorage.setItem('task', JSON.stringify([]));
  let localList = JSON.parse(localStorage.getItem('task'));
  let list = document.getElementById('lista-tarefas').innerHTML;

  localList.push(list);

  localStorage.setItem('task', JSON.stringify(localList));

}

function insertTaskInDOM() {
  document.getElementById('lista-tarefas').innerHTML = JSON.parse(localStorage.getItem('task'));
};

window.onload = insertTaskInDOM();

let saveButton = document.getElementById('salvar-tarefas');

saveButton.addEventListener('click', addTasksToLocalStorage);

// Função que move pra baixo
function moveDown() {
  let selectedItem = document.querySelector('.selected');

  if (selectedItem !== null) {
    let nxtSibling = selectedItem.nextElementSibling;
    if (nxtSibling !== null) {
      selectedItem.parentNode.insertBefore(nxtSibling, selectedItem);
    }
  }
}

let moveDownButton = document.getElementById('mover-baixo');

moveDownButton.addEventListener('click', moveDown)

// Função que move pra cima

function moveUp() {
  let selectedItem = document.querySelector('.selected');

  if (selectedItem !== null) {
    let previousSibling = selectedItem.previousElementSibling;

    if (previousSibling !== null) {
      selectedItem.parentNode.insertBefore(selectedItem, previousSibling);
    }
  }
}

let moveUpButton = document.getElementById('mover-cima');

moveUpButton.addEventListener('click', moveUp);

// Função que apaga elemento selecionado

function deleteSelected() {
  let selected = document.querySelector('.selected');

  if (selected !== null) {
    selected.parentNode.removeChild(selected);
  }
}

let deleteTaskButton = document.getElementById('remover-selecionado');

deleteTaskButton.addEventListener('click', deleteSelected);
