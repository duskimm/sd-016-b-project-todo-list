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
const buttonSave = getOne('#salvar-tarefa');

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
  tasksArray.push(newTaskItem);
}

function unpackingTasks(str) {
  return str.split('=');
}

function addUserClass(element, tasksArr) {
  const tasks = tasksArr.split(' ');
  for (let clas of tasks) {
    addClass(element, clas);
  }
}

function recoverUserTaskItem() {
  localStorage.tasks.split(',').forEach((task) => {
    const userTaskItem = createElement('li');
    addUserClass(userTaskItem, unpackingTasks(task)[1]);
    userTaskItem.innerText = unpackingTasks(task)[2];
    plugHtml(taskList, userTaskItem);

    console.log(unpackingTasks(task));
  });
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

// botões para cima e para baixo, para mover o item selecionado

function deleteSelectedTask() {
  const selected = getOne('.selected');

  buttonRemoveSelected.addEventListener('click', () => {
    selected.remove();
  });
}

function controlTemp() {
  deleteSelectedTask();
  storeUserData();
}

// botão salvar tarefas (localStorage)

function listenListItem() {
  const listItems = getAll('li');

  addMultiplesListeners(listItems, 'click', controlTemp);
}

function getTasks() {
  const filteredTasks = [];

  tasksArray.forEach((task) => {
    filteredTasks.push(`li=${task.className}=${task.innerText}`);
  });

  controlUserData('tasks', filteredTasks);
}

function encodeTask(str) {
  str.replaceAll(' ', '.');
  return str;
}

function decodeTask(str) {
  str.replaceAll('=', ' ');
}

function controlUserData(key, data) {
  if (key in localStorage) {
    getUserData(key, data);
  } else {
    setUserData(key, data);
  }
}

function setUserData(key, data) {
  if (typeof key === 'string' && typeof data === 'string') {
    localStorage.setItem(key, data)
  } else {
    JSON.stringify(key);
    JSON.stringify(data);
    localStorage.setItem(key, data)
  }
}

function getUserData(key, data) {
  localStorage[key] = data;
}

function storeUserData() {
  getTasks();
}

function restoreUserSection() {
  recoverUserTaskItem();
}

function attFunctions() {
  const buttons = getAll('button');

  addMultiplesListeners(buttons, 'click', () => {
    selectAllTasks();
    deleteAllTasks();
    deleteDoneTasks();
    resetInput();
    listenListItem();
    storeUserData();
  });
}

function userControl() {
  if (localStorage.tasks) {
    restoreUserSection();
  }
}

window.onload = () => {
  getTask();
  addTaskToList();
  attFunctions();
  userControl();
};
