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

function removeClass(element, delClass) {
  element.classList.remove(delClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

function removeOfHtml(fatherElement, sonElement) {
  fatherElement.removeChild(sonElement);
}

function addMultiplesEvents(element, eventsName, listener) {
  const events = eventsName.split(' ');

  events.forEach((event) => {
    element.addEventListener(event, listener, false);
  });
}

function addMultiplesListeners(arr, event, listener) {
  arr.forEach((i) => {
    i.addEventListener(event, listener, false);
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
}

const taskInput = getOne('#texto-tarefa');
const taskList = getOne('#lista-tarefas');
const buttonAdd = getOne('#criar-tarefa');
const buttonReset = getOne('#apaga-tudo');

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

function addTaskToList() {
  buttonAdd.addEventListener('click', () => {
    createTaskItem();
    selectAllTasks();
    deleteAllTasks();
  });
}

function selectAllTasks() {
  const taskItems = getAll('.task-item');

  addMultiplesEventsAndListeners(taskItems, 'click dblclick', controlSelection)
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

function controlSelection(event) {
  if (event.type === 'dblclick') {
    changeSelection(event);
  } else if (event.type === 'click') {
    changeDone(event);
  }
}

function changeDone(event) {
  const taskItem = event.target;
  
  addClass(taskItem, 'done');
}

function deleteAllTasks() {
  const taskItems = getAll('li');

  buttonReset.addEventListener('click', () => {
      taskItems.forEach((item) => {
        item.remove();
      });
  });
}

// Apagar itens riscados através do botão 'Prontos'

window.onload = () => {
  getTask();
  addTaskToList();
}
