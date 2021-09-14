const inputTask = document.getElementById('texto-tarefa');

const taskList = document.getElementById('lista-tarefas');

// Função que adiciona uma nova tarefa à lista
function addNewTask() {
  const newListItem = document.createElement('li');
  newListItem.className = 'list-item';
  newListItem.innerHTML = inputTask.value;
  taskList.appendChild(newListItem);

  inputTask.value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', addNewTask);

function enterTask(event) {
  if (event.key === 'Enter') {
    addNewTask();
  }
}

inputTask.addEventListener('keyup', enterTask);

// Função que seleciona a tarefa
function selectListItem(event) {
  const listItens = document.getElementsByClassName('list-item');

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
  taskList.innerHTML = '';
}

document.getElementById('apaga-tudo').addEventListener('click', deleteAllTasks);

// Função que apaga tarefas finalizadas
function deleteCompletedTasks() {
  const elements = document.getElementsByClassName('completed');

  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  // Créditos: Veikko Karsikko no Stack Overflow (https://stackoverflow.com/questions/4777077/removing-elements-by-class-name/14066534#14066534?newreg=a0387cf778c645cca68cdc5b3b37c0de)
}

document.getElementById('remover-finalizados').addEventListener('click', deleteCompletedTasks);

// Adicionando tarefas ao local storage

function addTasksToLocalStorage() {
  localStorage.setItem('task', JSON.stringify([]));
  const localList = JSON.parse(localStorage.getItem('task'));

  localList.push(taskList.innerHTML);

  localStorage.setItem('task', JSON.stringify(localList));
}

function insertTaskInDOM() {
  taskList.innerHTML = JSON.parse(localStorage.getItem('task'));

  return taskList.innerHTML;
}

window.onload = insertTaskInDOM();

document.getElementById('salvar-tarefas').addEventListener('click', addTasksToLocalStorage);

// Função que move pra baixo
function moveDown() {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem !== null) {
    const nxtSibling = selectedItem.nextElementSibling;
    if (nxtSibling !== null) {
      selectedItem.parentNode.insertBefore(nxtSibling, selectedItem);
    }
  }
}

document.getElementById('mover-baixo').addEventListener('click', moveDown);

// Função que move pra cima

function moveUp() {
  const selectedItem = document.querySelector('.selected');

  if (selectedItem !== null) {
    const previousSibling = selectedItem.previousElementSibling;

    if (previousSibling !== null) {
      selectedItem.parentNode.insertBefore(selectedItem, previousSibling);
    }
  }
}

document.getElementById('mover-cima').addEventListener('click', moveUp);

// Função que apaga elemento selecionado

function deleteSelected() {
  const selected = document.querySelector('.selected');

  if (selected !== null) {
    selected.parentNode.removeChild(selected);
  }
}

document.getElementById('remover-selecionado').addEventListener('click', deleteSelected);
