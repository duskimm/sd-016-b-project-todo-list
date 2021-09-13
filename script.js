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

const tasksArray = [];

const taskInput = getOne('#texto-tarefa');
const taskList = getOne('#lista-tarefas');
const buttonAdd = getOne('#criar-tarefa');
const buttonReset = getOne('#apaga-tudo');
const buttonDone = getOne('#remover-finalizados');
const buttonRemoveSelected = getOne('#remover-selecionado');

// functions for the project

function getTask() {
  taskInput.addEventListener('keyup', (event) => {
    user.msg = event.target.value;
  });
}

function createTaskItem() {
  const newTaskItem = createElement('li');
  addClass(newTaskItem, 'task-item');
  tasksArray.push(user.msg);
  newTaskItem.innerText = user.msg;
  plugHtml(taskList, newTaskItem);
}

// function recoverUserTaskItem() {
//   const conditionDecode = localStorage.tasks.includes('/');
//   localStorage.tasks.split(',').forEach((task) => {
//     const newTaskItem = createElement('li');
//     addClass(newTaskItem, 'task-item');
//     newTaskItem.innerText = conditionDecode ? decodeTask(task) : task;
//     plugHtml(taskList, newTaskItem);
//   });
// }

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

// function getTasks() {
//   tasksArray.forEach((task) => {
//     encodeTask(task);
//   });

//   controlUserData('tasks', tasksArray);
// }

// function encodeTask(str) {
//   str.replaceAll(' ', '/');
//   return str;
// }

// function decodeTask(str) {
//   str.replaceAll('/', ' ');
// }

// function controlUserData(key, data) {
//   if (key in localStorage) {
//     getUserData(key, data);
//   } else {
//     setUserData(key, data);
//   }
// }

// function setUserData(key, data) {
//   if (typeof key === 'string' && typeof data === 'string') {
//     localStorage.setItem(key, data)
//   } else {
//     JSON.stringify(key);
//     JSON.stringify(data);
//     localStorage.setItem(key, data)
//   }
// }

// function getUserData(key, data) {
//   localStorage[key] = data;
// }

// function storeUserData() {
//   getTasks();
// }

// function restoreUserSection() {
//   recoverUserTaskItem();
// }

function attFunctions() {
  const buttons = getAll('button');

  addMultiplesListeners(buttons, 'click', () => {
    selectAllTasks();
    deleteAllTasks();
    deleteDoneTasks();
    resetInput();
    listenListItem();
    // storeUserData();
  });
}

window.onload = () => {
  getTask();
  addTaskToList();
  attFunctions();
  // restoreUserSection();
};
