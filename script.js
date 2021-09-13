const btnAddTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const list = document.querySelector('#lista-tarefas');
const btnRemoveAll = document.querySelector('#apaga-tudo');
const btnRemoveCompleted = document.querySelector('#remover-finalizados');
const btnSaveTask = document.querySelector('#salvar-tarefas');
const btnUp = document.querySelector('#mover-cima');
const btnDown = document.querySelector('#mover-baixo');
const btnRemoveSelect = document.querySelector('#remover-selecionado');

function createTask() {
  const inputValue = inputTask.value;
  if (inputValue === '') {
    window.alert('Insira uma tarefa valida!');
  } else {
    const createListItem = document.createElement('li');
    createListItem.className = 'list-item';
    createListItem.innerHTML = inputValue;
    list.appendChild(createListItem);
    inputTask.value = '';
  }
}

function changeBackgroundColor(event) {
  const task = document.querySelectorAll('.list-item');
  const eventTarget = event.target;
  /* verifica se existe a classe taskSelected na tarefa */
  for (let i = 0; i < task.length; i += 1) {
    if (task[i].classList.contains('taskSelected')) {
      task[i].classList.remove('taskSelected');
    }
  } eventTarget.classList.add('taskSelected');
}

function addTaskToCompleted(event) {
  const eventTarget = event.target;
  if (eventTarget.classList.contains('completed') === false) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

function removeAll() {
  if (list.length === undefined) {
    window.alert('Nao existem tarefas a serem removidas');
  }
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function removeCompleted() {
  const taskCompleted = document.getElementsByClassName('completed');
  while (taskCompleted[0]) {
    taskCompleted[0].parentNode.removeChild(taskCompleted[0]);
  }
}

function saveTask() {
  const listItem = document.getElementsByClassName('list-item');
  const listItens = [];
  const listItensClass = [];
  for (let i = 0; i < listItem.length; i += 1) {
    listItens.push(listItem[i].innerHTML);
    listItensClass.push(listItem[i].className);
  }
  localStorage.setItem('minhasTarefas', JSON.stringify(listItens));
  localStorage.setItem('listClassItens', JSON.stringify(listItensClass));
}

function moveTaskUp() {
  const listItens = list.children;
  for (let i = 0; i < listItens.length; i += 1) {
    if (listItens[i].classList.contains('taskSelected')) {
      list.insertBefore(listItens[i], listItens[i].previousSibling);
      break;
    }
  }
}

function moveTaskDown() {
  const listItens = list.children;
  for (let i = 0; i < listItens.length - 1; i += 1) {
    if (listItens[i].classList.contains('taskSelected')) {
      list.insertBefore(listItens[i].nextSibling, listItens[i]);
      break;
    }
  }
}

function removeTaskSelected() {
  const selectedTask = document.getElementsByClassName('taskSelected');
  while (selectedTask[0]) {
    selectedTask[0].parentNode.removeChild(selectedTask[0]);
  }
}

window.onload = () => {
  const minhasTarefas = JSON.parse(localStorage.getItem('minhasTarefas'));
  const listItensClass = JSON.parse(localStorage.getItem('listClassItens'));
  if (minhasTarefas) {
    for (let i = 0; i < minhasTarefas.length; i += 1) {
      const createListItem = document.createElement('li');
      createListItem.className = listItensClass[i];
      createListItem.innerText = minhasTarefas[i];
      list.appendChild(createListItem);
    }
  } btnRemoveSelect.addEventListener('click', removeTaskSelected);
  btnUp.addEventListener('click', moveTaskUp);
  btnDown.addEventListener('click', moveTaskDown);
  btnSaveTask.addEventListener('click', saveTask);
  btnRemoveCompleted.addEventListener('click', removeCompleted);
  btnRemoveAll.addEventListener('click', removeAll);
  btnAddTask.addEventListener('click', createTask);
  list.addEventListener('click', changeBackgroundColor);
  list.addEventListener('dblclick', addTaskToCompleted);
};
