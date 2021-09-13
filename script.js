// functions for working with elements

function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function createElement(tag) {
  return document.createElement(tag);
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

function toggleClass(element, alternateClass) {
  element.classList.toggle(alternateClass);
}

function removeClass(element, delClass) {
  element.classList.remove(delClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

function addMultiplesListeners(arr, eventName, listener) {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
}

function addMultiplesEventsAndListeners(arr, eventsName, listener) {
  const events = eventsName.split(' ');

  arr.forEach((element) => {
    events.forEach((event) => {
      element.addEventListener(event, listener, false);
    });
  });
}

// global variables

const user = {
  msg: '',
};

const taskInput = getOne('#texto-tarefa'),
      taskList = getOne('#lista-tarefas'),
      buttonAdd = getOne('#criar-tarefa'),
      buttonReset = getOne('#apaga-tudo'),
      buttonDone = getOne('#remover-finalizados'),
      buttonRemoveSelected = getOne('#remover-selecionado');

// functions for the project

function getTask() {
  taskInput.addEventListener('keyup', (event) => {
    user.msg = event.target.value;
  });
}

function createTaskItem() {
  const newTaskItem = createElement('li');
  addClass(newTaskItem, 'task-item');
  newTaskItem.innerText = user.msg;
  plugHtml(taskList, newTaskItem);
}

function deleteDoneTasks() {
  const doneTasks = getAll('.completed');

  buttonDone.addEventListener('click', () => {
    doneTasks.forEach((task) => {
      task.remove();
    });
  });
}

function resetSelection() {
  const listItems = getAll('li');

  listItems.forEach((item) => {
    removeClass(item, 'selected');
  });
}

function changeSelection(event) {
  const taskItem = event.target;

  resetSelection();
  addClass(taskItem, 'selected');
}

function changeDone(event) {
  const taskItem = event.target;
  toggleClass(taskItem, 'completed');
  deleteDoneTasks();
}

function controlSelection(event) {
  if (event.type === 'dblclick') {
    changeDone(event);
  } else if (event.type === 'click') {
    changeSelection(event);
  }
}

function selectAllTasks() {
  const taskItems = getAll('.task-item');

  addMultiplesEventsAndListeners(taskItems, 'click dblclick', controlSelection);
}

function deleteAllTasks() {
  const taskItems = getAll('li');

  buttonReset.addEventListener('click', () => {
    taskItems.forEach((item) => {
      item.remove();
    });
  });
}

function resetInput() {
  taskInput.value = '';
}

function addTaskToList() {
  buttonAdd.addEventListener('click', () => {
    createTaskItem();
  });
}

// botão salvar tarefas (localStorage)

// botões para cima e para baixo, para mover o item selecionado

// botão remover selecionado

function deleteSelectedTask() {
  const selected = getOne('.selected');

  buttonRemoveSelected.addEventListener('click', () => {
    selected.remove();
  });
}

function listenListItem() {
  const listItems = getAll('li');

  addMultiplesListeners(listItems, 'click', deleteSelectedTask);
}

function attFunctions() {
  const buttons = getAll('button');

  addMultiplesListeners(buttons, 'click', () => {
    selectAllTasks();
    deleteAllTasks();
    deleteDoneTasks();
    resetInput();
    listenListItem();
  });

}

window.onload = () => {
  getTask();
  addTaskToList();
  attFunctions();
};
